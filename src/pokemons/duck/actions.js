import types from './types';

const fetchPokemon = () => {
    return {
        type: types.FETCH_POKEMON
    };
};

const receivePokemon = (result, data) => {
    if (result === 'success') {
        return {
            type: types.FETCH_POKEMON,
            result,
            pokemon: data
        };
    }

    return {
        type: types.FETCH_POKEMON,
        result,
        errors: data
    };
};

const catchPokemon = (pokemon) => {
    return {
        type: types.CATCH_POKEMON,
        pokemon
    };
};

const releasePokemon = (id) => {
    return {
        type: types.RELEASE_POKEMON,
        id
    };
};

const fetchAbility = () => {
    return {
        type: types.FETCH_ABILITY
    };
};

const receiveAbility = (result, data) => {
    if (result === 'success') {
        return {
            type: types.FETCH_ABILITY,
            result,
            ability: data
        };
    }

    return {
        type: types.FETCH_ABILITY,
        result,
        errors: data
    };
};

const fetchPokemonsByType = () => {
    return {
        type: types.FETCH_POKEMONS_BY_TYPE
    };
};

const receivePokemonsByType = (result, data) => {
    if (result === 'success') {
        return {
            type: types.FETCH_POKEMONS_BY_TYPE,
            result,
            pokemonsByType: data
        };
    }

    return {
        type: types.FETCH_POKEMONS_BY_TYPE,
        result,
        errors: data
    };
};

export default {
    fetchPokemon,
    receivePokemon,
    catchPokemon,
    releasePokemon,
    fetchAbility,
    receiveAbility,
    fetchPokemonsByType,
    receivePokemonsByType
};