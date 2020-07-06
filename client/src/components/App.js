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
				<Switch>
					<Route path="/" exact>
						<Landing />
					</Route>
					<Route path="/surveys" exact>
						<Dashboard />
					</Route>
					<Route path="/surveys/new" exact>
						<SurveyNew />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}
