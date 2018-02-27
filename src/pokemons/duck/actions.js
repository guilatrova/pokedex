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

export default {
    fetchPokemon,
    receivePokemon
};