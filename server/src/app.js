import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { configDotenv } from 'dotenv';

configDotenv();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const HOST = process.env.GMAIL_GHOST;
const GMAIL_PORT = process.env.GMAIL_PORT;
const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

app.get('/', (req, res) => res.send('E-MAIL'));

app.post('/api/send', (req, res) => {
	const { replyTo, subject, text, email } = req.body;

	const transporter = nodemailer.createTransport({
		host: HOST,
		port: GMAIL_PORT,
		secure: true,
		auth: { user, pass },
	});
	transporter
		.sendMail({
			from: user,
			to: 'erickfx45@gmail.com',
			replyTo: replyTo,
			subject: subject,
			text: `${text} enviado por: ${email}`,
		})
		.then((response) => {
			res.send('enviei o email', response);
		})
		.catch((e) => {
			console.log(e);
			res.send(e);
		});
});

app.listen(PORT, () => console.log('server listening on port', PORT));

export default app;
