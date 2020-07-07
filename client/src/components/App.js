import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
	componentDidMount() {}

	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
							<Route exact path="/">
								<Landing />
							</Route>
							<Route exact path="/surveys">
								<Dashboard />
							</Route>
							<Route exact path="/surveys/new">
								<SurveyNew />
							</Route>
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
