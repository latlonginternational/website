import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
	try {
		const body = await readBody(event);
		const { name, email, phone, subject, message } = body;

		// Validation des champs
		if (!name || !email || !phone || !subject || !message) {
			throw createError({
				statusCode: 400,
				message: "Tous les champs sont requis"
			});
		}

		// Validation du format email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			throw createError({
				statusCode: 400,
				message: "Format d'email invalide"
			});
		}

		// Validation du format téléphone
		const phoneRegex = /^\+243[0-9]{9}$/;
		if (!phoneRegex.test(phone)) {
			throw createError({
				statusCode: 400,
				message: "Format de téléphone invalide. Utilisez le format +243XXXXXXXXX"
			});
		}

		// Configuration du transporteur d'email
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: true,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS
			}
		});

		// Destinataires
		const recipients = ["test@wito-inc.com", "info@latlongcongo.com"];

		// Préparation du contenu de l'email
		const mailOptions = {
			from: process.env.SMTP_USER,
			to: recipients.join(", "),
			subject: `Nouveau message de contact: ${subject}`,
			html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
		};

		// Envoi de l'email
		await transporter.sendMail(mailOptions);

		return {
			success: true,
			message: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais."
		};
	} catch (error: any) {
		console.error("Erreur lors de l'envoi de l'email:", error);

		throw createError({
			statusCode: error.statusCode || 500,
			message: error.message || "Une erreur est survenue lors de l'envoi du message"
		});
	}
});
