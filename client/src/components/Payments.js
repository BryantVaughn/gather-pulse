import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout
				name="GatherPulse"
				description="$5 for 5 survey credits"
				amount={500}
				token={(token) => this.props.handleToken(token)}
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

export default connect(null, actions)(Payments);
