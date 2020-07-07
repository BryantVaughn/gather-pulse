import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
	render() {
		console.log(this.props);
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

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
