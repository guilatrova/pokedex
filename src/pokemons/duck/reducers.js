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

function removeReducer(state, id) {
    return {
        ...state,
        pokemons: state.pokemons.filter(pkm => pkm.id  != id)
    };
}

export default function reducer(state = initialState, action) {    
    switch (action.type) {        
        case types.FETCH_POKEMON:
            return fetchReducer(state, action);

        case types.RELEASE_POKEMON:
            return removeReducer(state, action.id);

        default:
            return state;
    }
}