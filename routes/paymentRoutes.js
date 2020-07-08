const { stripeSecretKey } = require('../config/keys');
const stripe = require('stripe')(stripeSecretKey);

module.exports = (app) => {
	app.post('/api/payments', async (req, res) => {
		const charge = await stripe.charges.create({
			amount: 500,
			currency: 'usd',
			description: '$5 for 5 survey credits',
			source: req.body.id
		});

		req.user.credits += 5;
		const user = await req.user.save();
		res.send(user);
	});
};
