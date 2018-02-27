import types from './types';

const initialState = {
    pokemons: [],
    isFetching: false,
    errors: {},
};

function fetchReducer(state, action) {
    switch(action.result) {
        case 'success':
            return {
                ...state,
                isFetching: false,
                pokemons: [
                    ...state.pokemons,
                    action.pokemon
                ]
            };

        case 'fail':
            return {
                ...state,
                isFetching: false,
                errors: action.errors
            };

        default:
            return {
                ...state,
                isFetching: true                
            };
    }
}

export default function reducer(state = initialState, action) {    
    switch (action.type) {        
        case types.FETCH_POKEMON:
            return fetchReducer(state, action);

        default:
            return state;
    }
}