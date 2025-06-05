import { Request, Response, NextFunction } from 'express'; 
import nodemailer from 'nodemailer';

//Configuración del transportador de Nodemailer
const transporter = nodemailer.createTransport({
    host: 'titan.profesionalhosting.com', 
    port: 465,
    secure: true,
    auth: {
      user: process.env['NODemailer_USER'], 
      pass: process.env['NODemailer_PASS'],
    },
  });

  transporter.verify((err, success) => {
    if (err) {
      console.error('Error en configuración de SMTP:', err);
    } else {
      console.log('Servidor listo para enviar correos');
    }
  });
  

export const sendEmail = async (req: Request, res: Response, next: NextFunction) => {

const { name, email, phone, message } = req.body;
  
const mailOptions = {
  from: 'rotulos@learoyled.com',
  to: 'rotulos@learoyled.com', 
  subject: `Nueva consulta en ROTULOS de ${name}`,
  text: `
    Nombre: ${name}
    Correo: ${email}
    Teléfono: ${phone}
    Mensaje: ${message}
  `,
  replyTo: email
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      console.error('Error al enviar el correo. Vuelve a intentarlo más tarde.', error); 
    return res.status(500).send(error.toString());

  }
  return res.status(200).send({ message: 'Tu correo se ha enviado. Gracias por contactar.' });
});

}