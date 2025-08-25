// pages/api/contact.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Asegúrate de tener esta variable de entorno

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    try {
      const data = await resend.emails.send({
        from: 'Maurizio Caballero <onboarding@resend.dev>',
        to: 'livemauriz@gmail.com',
        subject: `Mensaje de contacto de ${name} - Portafolio`,
        replyTo: email,
        html: `
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        `,
      });

      console.log('Correo enviado:', data);
      return res.status(200).json({ message: 'Mensaje enviado con éxito.' });
    } catch (error) {
      console.error('Error al enviar correo con Resend:', error);
      return res.status(500).json({ error: 'Error al enviar el mensaje.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
