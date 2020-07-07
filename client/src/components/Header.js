import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav style={{ paddingLeft: '10px', backgroundColor: '#365c7b' }}>
				<div className="nav-wrapper">
					<a className="left brand-logo">GatherPulse</a>
					<ul className="right">
						<li>
							<a>Login with Google</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
