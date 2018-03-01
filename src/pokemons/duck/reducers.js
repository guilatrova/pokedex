import types from './types';
import { extractIdFromUrl } from '../../utils/query';

const initialState = {
    pokemons: [],
    owned: [],
    abilities: [],
    filteredTypePokemons: {},
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

function fetchPokemonsByTypeReducer(state, action) {
    switch(action.result) {
        case 'success': {
            const type = action.pokemonsByType.name;
            return {
                ...state,
                isFetching: false,
                filteredTypePokemons: {
                    ...state.filteredTypePokemons,
                    [type]: action.pokemonsByType.pokemon.map(parent => ({ id: extractIdFromUrl(parent.pokemon.url), ...parent.pokemon }))
                }
            };
        }

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
        owned: state.owned.filter(pkm => pkm != id)
    };
}

function catchPokemonReducer(state, id) {    
    if (isNaN(id)) {
        id = state.pokemons.find(pkm => pkm.name == id).id;
    }
    id = parseInt(id);    

    if (!state.owned.includes(id)) {
        return {
            ...state,
            owned: [
                ...state.owned,
                id
            ]
        };
    }

    return state;
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_POKEMON:
            return fetchPokemonReducer(state, action);

        case types.CATCH_POKEMON:
            return catchPokemonReducer(state, action.id);

        case types.RELEASE_POKEMON:
            return removePokemonReducer(state, action.id);

        case types.FETCH_ABILITY:
            return fetchAbilityReducer(state, action);

        case types.FETCH_POKEMONS_BY_TYPE:
            return fetchPokemonsByTypeReducer(state, action);

        default:
            return state;
    }
}