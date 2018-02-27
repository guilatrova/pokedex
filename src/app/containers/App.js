/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import AppBody from './AppBody';
import PokedexPage from '../../pokemons/containers/PokedexPage';

const NotFoundPage = () => <p>Not found</p>;

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

						<Route exact path="/" component={PokedexPage} />
						<Route component={NotFoundPage} />

					</Switch>
				</AppBody>
			</div>
		);
	}
}