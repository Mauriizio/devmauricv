// pages/api/contact.js
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY || "";
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Reemplaza por tu correo real o usa CONTACT_TO en .env.local
const CONTACT_TO = process.env.CONTACT_TO || "livemauriz@gmail.com";
// Cambia a tu dominio verificado cuando lo tengas (p.ej. noreply@tudominio.com)
const MAIL_FROM = process.env.MAIL_FROM || "Maurizio Hernández <onboarding@resend.dev>";

// Opcional: fallback a Web3Forms si lo configuras
const WEB3FORMS_KEY =
  process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, email, message, company } = req.body || {};

    // Honeypot (silencio si es bot)
    if (company && String(company).trim() !== "") {
      return res.status(200).json({ message: "OK" });
    }

    // Validación básica
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return res.status(400).json({ error: "Email inválido." });
    }
    if (String(message).length > 2000) {
      return res.status(400).json({ error: "Mensaje demasiado largo (máx. 2000 caracteres)." });
    }

    const subject = `Nuevo mensaje desde devmauricv: ${name}`;
    const text = `Nombre: ${name}\nEmail: ${email}\n\n${message}`;
    const html = `
      <h2>Nuevo contacto</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Mensaje:</strong></p>
      <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
    `;

    // 1) Intentar con Resend (si hay API key)
    if (resend) {
      try {
        const { data, error } = await resend.emails.send({
          from: MAIL_FROM,
          to: [CONTACT_TO],     // <-- tu correo
          replyTo: email,       // <-- responde directo al remitente
          subject,
          text,
          html,
        });

        if (error) {
          console.error("Resend error:", error);
        } else if (data?.id) {
          return res.status(200).json({ message: "Mensaje enviado con éxito (Resend)." });
        }
      } catch (e) {
        console.error("Resend exception:", e);
      }
    } else {
      console.warn("RESEND_API_KEY no definida; saltando a fallback Web3Forms si existe.");
    }

    // 2) Fallback a Web3Forms (si está configurado)
    if (WEB3FORMS_KEY) {
      try {
        const resp = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            from_name: "devMauriz Contact",
            subject,
            name,
            email,
            message,
            botcheck: company || "",
          }),
        });
        const json = await resp.json();
        if (resp.ok && json?.success) {
          return res.status(200).json({ message: "Mensaje enviado con éxito (Web3Forms)." });
        }
        console.error("Web3Forms error:", json);
      } catch (e) {
        console.error("Web3Forms exception:", e);
      }
    }

    // Si todo falló
    return res.status(500).json({
      error:
        process.env.NODE_ENV !== "production"
          ? "No se pudo enviar por Resend ni Web3Forms (ver logs del server)."
          : "No se pudo enviar. Intenta más tarde.",
    });
  } catch (err) {
    console.error("Handler fatal:", err);
    return res.status(500).json({ error: "Error interno al enviar." });
  }
}

function escapeHtml(s = "") {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
