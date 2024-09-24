import nodemailer, { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport'; // Importar el tipo SMTPTransport

class MailerService {
    private transporter: Transporter<SMTPTransport.SentMessageInfo>;

    constructor() {
        const smtpOptions: SMTPTransport.Options = {
            host: process.env.MAILHOSTING,
            port: 465,
            secure: true, 
            auth: {
                user: process.env.MAILUSER,
                pass: process.env.MAILPASS,
            },
        };

        this.transporter = nodemailer.createTransport(smtpOptions);
    }

    async verifyTransporter(): Promise<void> {
        try {
            await this.transporter.verify();
            console.log("Send mail ready");
        } catch (error) {
            console.error("Error verifying transporter:", error);
        }
    }

    async sendMail(mailOptions: nodemailer.SendMailOptions): Promise<void> {
        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log("Email sent: ", info.messageId);
        } catch (error) {
            console.error("Error sending mail:", error);
        }
    }
}

// Uso de la clase
//const mailerService = new MailerService();
//mailerService.verifyTransporter();

// Ejemplo de envío de correo
// mailerService.sendMail({
//     from: '"sistemas" <administracion@pmp.com>', 
//     to: "example@domain.com",
//     subject: "Test email",
//     text: "hola esto es un email de prueba",
//     html: "<b>contenido html DEL correo!</b>"
// });
