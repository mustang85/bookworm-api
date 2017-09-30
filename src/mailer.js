import nodemailer from 'nodemailer';

const from = '"Bookworm" <info@bookworm.com>';

function setup() {
	return nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		post: process.env.EMAIL_PORT,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		}
	})
}

export function sendConfirmationEmail(user) {
	const transport = setup();
	const email = {
		from,
		to: user.email,
		subject: 'Welcome to Bookworm',
		test: `
			Welcome to Bookworm. Please, confirm your email.

			${user.generateConfirmationUrl()}
		`
	}

	transport.sendMail(email);
}