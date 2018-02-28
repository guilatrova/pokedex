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

const releasePokemon = (id) => {
    return {
        type: types.RELEASE_POKEMON,
        id
    };
};

export default {
    fetchPokemon,
    receivePokemon,
    releasePokemon
};