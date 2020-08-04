import React from 'react';
import GPLogo from '../images/GPLogo.png';
import './styles/Landing.css';

export default function Landing() {
	return (
		<div className="root">
			<img className="logo" src={GPLogo} />
			<h4>Collect user feedback with GatherPulse!</h4>
			<p>
				GatherPulse is an easy-to-use, powerful tool that allows you to create
				custom surveys and email them out to users. All responses are tracked
				and displayed in your survey dashboard.
			</p>
		</div>
	);
}
