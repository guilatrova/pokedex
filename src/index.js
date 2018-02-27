/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './redux/configureStore';
import Root from './app/containers/Root';
import moment from 'moment';

require('./favicon.ico');
import './styles/styles.scss';

import 'moment/locale/pt-br'; 
moment.locale('pt-br');

const store = configureStore();

render(
	<AppContainer>
		<Root store={store} history={history} />
	</AppContainer>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept('./app/containers/Root', () => {
		const NewRoot = require('./app/containers/Root').default;
		render(
			<AppContainer>
				<NewRoot store={store} history={history} />
			</AppContainer>,
			document.getElementById('app')
		);
	});
}
