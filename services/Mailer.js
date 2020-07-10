const sgMail = require('@sendgrid/mail');
const helpers = require('@sendgrid/helpers');
const { sendGridKey } = require('../config/keys');

class Mailer extends helpers.classes.Mail {
	constructor({ subject, recipients }, htmlContent) {
		super();
		this.setFrom('bf_vaughn@hotmail.com');
		this.setSubject(subject);
		this.addHtmlContent(htmlContent);

		this.recipients = recipients.map(({ email }) =>
			helpers.classes.EmailAddress.create(email)
		);

		this.setTrackingSettings({
			clickTracking: {
				enable: true,
				enable_text: true
			},
			openTracking: {
				enable: true
			}
		});

		this.addTo(this.recipients);
	}

	async send() {
		sgMail.setApiKey(sendGridKey);
		return await sgMail.send(this.toJSON());
	}
}

module.exports = Mailer;
