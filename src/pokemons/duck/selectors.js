const getPokemons = (state) => state.pokemons.pokemons;

const isFetching = (state) => state.pokemons.isFetching;

export default {
    getPokemons,
    isFetching
};