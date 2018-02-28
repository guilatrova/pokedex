const getPokemons = (state) => state.pokemons.pokemons;

const isFetching = (state) => state.pokemons.isFetching;

const getAbilitiesDescriptionsMappedById = state => state.pokemons.abilities.reduce((prev, ability) => {
    prev[ability.id] = ability.effect_entries[0].short_effect;
    return prev;
}, []);

export default {
    getPokemons,
    isFetching,
    getAbilitiesDescriptionsMappedById
};