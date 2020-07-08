import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				name="GatherPulse"
				description="$5 for 5 survey credits"
				amount={500}
				token={(token) => console.log(token)}
				stripeKey={process.env.REACT_APP_STRIPE_KEY}
			>
				<button
					className="btn"
					style={{
						backgroundColor: 'rgba(255,255,255,0.8)',
						color: '#365c7b',
						fontWeight: 'bold'
					}}
				>
					Add Credits
				</button>
			</StripeCheckout>
		);
	}
}
