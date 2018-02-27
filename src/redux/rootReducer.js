import { combineReducers } from 'redux';

import pokemons from '../pokemons/duck';

const rootReducer = combineReducers({
    pokemons
});

export default rootReducer;