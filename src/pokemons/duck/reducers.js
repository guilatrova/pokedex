import types from './types';

const initialState = {
    pokemons: [],
    abilities: [],
    isFetching: false,
    errors: {},
};

function fetchPokemonReducer(state, action) {
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

function fetchAbilityReducer(state, action) {
    switch(action.result) {
        case 'success':
            return {
                ...state,
                isFetching: false,
                abilities: [
                    ...state.abilities,
                    action.ability
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

function removePokemonReducer(state, id) {
    return {
        ...state,
        pokemons: state.pokemons.filter(pkm => pkm.id  != id)
    };
}

export default function reducer(state = initialState, action) {    
    switch (action.type) {        
        case types.FETCH_POKEMON:
            return fetchPokemonReducer(state, action);

        case types.RELEASE_POKEMON:
            return removePokemonReducer(state, action.id);

        case types.FETCH_ABILITY:
            return fetchAbilityReducer(state, action);

        default:
            return state;
    }
}