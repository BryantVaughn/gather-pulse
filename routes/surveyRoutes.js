const mongoose = require('mongoose');
const { Path } = require('path-parser');
const { URL } = require('url');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = (app) => {
	app.get('/api/surveys/thanks', (req, res) => {
		res.send('Thank you for your input!');
	});

	app.post('/api/surveys/webhooks', (req, res) => {
		const p = new Path('/api/surveys/:surveyId/:choice');
		const events = req.body.map(({ url, email }) => {
			const match = p.test(new URL(url).pathname);
			if (match) return { ...match, email };
		});

		const filterEvents = events.filter((event) => event);
		const uniqueEvents = filterEvents.filter(({ email, surveyId }) => {
			if (this[surveyId] && this[email]) {
				return false;
			}
			this[email] = true;
			this[surveyId] = true;
			return true;
		}, Object.create(null));
		console.log(uniqueEvents);
		res.send({});
	});

	app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
		const { title, sender, subject, body, recipients } = req.body;
		const survey = new Survey({
			title,
			sender,
			subject,
			body,
			recipients: recipients
				.split(',')
				.map((email) => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now()
		});

		const mailer = new Mailer(survey, surveyTemplate(survey));
		try {
			await mailer.send();
			await survey.save();
			req.user.credits -= 1;
			const user = await req.user.save();

			res.send(user);
		} catch (err) {
			res.status(422).send(err);
		}
	});
};
