// pages/api/contact.js
import { Resend } from "resend";

/**
 * Next.js (pages router) – Node runtime por defecto.
 * Dejamos bodyParser activo (por defecto lo está), no usamos Edge.
 */
export const config = {
  api: { bodyParser: true },
};

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const CONTACT_TO = process.env.CONTACT_TO || "livemauriz@gmail.com";

/**
 * Usa un remitente permitido por Resend.
 * - Recomendado (PROD): un correo de tu dominio verificado en Resend, p.ej. "Contacto <contacto@maurizio.dev>"
 * - Temporal: "onboarding@resend.dev" (Resend lo permite, pero algunos buzones lo filtran).
 */
const MAIL_FROM =
  process.env.MAIL_FROM ||
  "Maurizio Hernandez <onboarding@resend.dev>"; // (sin acentos para evitar encoding raro en algunos MTAs)

const WEB3FORMS_KEY =
  process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

/** Pequeño helper para no exponer detalles al usuario final en prod */
const safeError = (msg) =>
  process.env.NODE_ENV !== "production" ? msg : "No se pudo enviar. Intenta más tarde.";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    const { name, email, message, company } = req.body || {};

    // Honeypot
    if (company && String(company).trim() !== "") {
      return res.status(200).json({ message: "OK" });
    }

    // Validaciones
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
      return res.status(400).json({ error: "Email inválido." });
    }
    if (String(message).length > 2000) {
      return res.status(400).json({ error: "Mensaje demasiado largo (máx. 2000 caracteres)." });
    }

    const subject = `Nuevo mensaje desde maurizio.dev: ${name}`;
    const text = `Nombre: ${name}\nEmail: ${email}\n\n${message}`;
    const html = `
      <h2>Nuevo contacto</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Mensaje:</strong></p>
      <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
    `;

    // 1) Resend primero (si hay API key)
    if (RESEND_API_KEY) {
      try {
        const resend = new Resend(RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
          from: MAIL_FROM,
          to: [CONTACT_TO],        // puede ser string o array; usamos array
          subject,
          text,
          html,
          // Nota: en el SDK actual es "replyTo" (camelCase)
          replyTo: email,
        });

        if (error) {
          console.error("[/api/contact] Resend error:", JSON.stringify(error));
        } else if (data?.id) {
          console.log("[/api/contact] Resend OK. id:", data.id);
          return res.status(200).json({ message: "Mensaje enviado con éxito (Resend)." });
        } else {
          console.error("[/api/contact] Resend sin error ni id. data:", data);
        }
      } catch (e) {
        console.error("[/api/contact] Resend exception:", e);
      }
    } else {
      console.warn("[/api/contact] RESEND_API_KEY no definida en este entorno.");
    }

    // 2) Fallback a Web3Forms si está configurado
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
          console.log("[/api/contact] Web3Forms OK.");
          return res.status(200).json({ message: "Mensaje enviado con éxito (Web3Forms)." });
        }
        console.error("[/api/contact] Web3Forms error:", json);
      } catch (e) {
        console.error("[/api/contact] Web3Forms exception:", e);
      }
    } else {
      console.warn("[/api/contact] WEB3FORMS key no configurada; no hay fallback.");
    }

    // 3) Si nada funcionó
    return res.status(500).json({ error: safeError("No se pudo enviar por Resend ni Web3Forms.") });
  } catch (err) {
    console.error("[/api/contact] Handler fatal:", err);
    return res.status(500).json({ error: safeError("Error interno al enviar.") });
  }
}

function escapeHtml(s = "") {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
