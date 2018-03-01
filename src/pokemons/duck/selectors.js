const getPokemons = state => state.pokemons.pokemons;

const isFetching = state => state.pokemons.isFetching;

const getOwnedPokemons = state => getPokemons(state).filter(pkm => state.pokemons.owned.includes(pkm.id));

const getOwnedPokemonsIds = state => state.pokemons.owned;

const isPokemonCached = (state, id) => {
    const prop = isNaN(id) ? "name" : "id";
    return getPokemons(state).some(pkm => pkm[prop] == id);
};

const isAbilityCached = (state, id) => state.pokemons.abilities.some(ab => ab.id == id);

const isPokemonsByTypeCached = (state, type) => getPokemonsOfType(state, type).length > 0;

const getAbilitiesDescriptionsMappedById = state => state.pokemons.abilities.reduce((prev, ability) => {
    prev[ability.id] = ability.effect_entries[0].short_effect;
    return prev;
}, []);

const getPokemonsImagesMappedById = state => getPokemons(state).reduce((prev, pokemon) => {
    prev[pokemon.id] = pokemon.sprites.front_default;
    return prev;
}, []);

const getPokemonsOfType = (state, type) => {
    const pokemons = state.pokemons.filteredTypePokemons[type];
    const ownedPokemons = getOwnedPokemons(state);
    if (pokemons) {        
        return pokemons.map(pkm => ownedPokemons.find(owned => owned.name == pkm.name) || pkm);
    }

    return [];
};

export default {
    isFetching,
    isPokemonCached,
    isAbilityCached,
    isPokemonsByTypeCached,
    getPokemons,
    getOwnedPokemons,
    getOwnedPokemonsIds,
    getPokemonsOfType,
    getAbilitiesDescriptionsMappedById,
    getPokemonsImagesMappedById
};