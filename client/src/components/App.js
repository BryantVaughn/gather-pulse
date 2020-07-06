import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

export default function App() {
	return (
		<div>
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
