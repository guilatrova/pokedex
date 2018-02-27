/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppBody from './AppBody';
import session from '../../services/session';

// Stubbed components
const HomePage = () => <p>Home</p>;
const NotFoundPage = () => <p>Not found</p>;

const PrivateRoute = ({ component: Component, ...childProps}) => {
	return (
		<Route
			{...childProps}
			render={(props) => session.isAuthenticated() ? 
				<Component {...props} /> : 
				<Redirect to={{pathname: '/login', state: {from: props.location}}} />}
		/>
	);
};

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

export default class App extends React.Component {
	static propTypes = {
		children: PropTypes.element
	}

	render() {
		return (
			<div>
				<AppBody>
					<Switch>

						<Route exact path="/" component={HomePage} />
						<Route path="/login" component={HomePage} />
						<PrivateRoute path="/private" component={HomePage} />
						<Route component={NotFoundPage} />

					</Switch>
				</AppBody>
			</div>
		);
	}
}