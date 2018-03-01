import selectors from './selectors';

describe('pokemons/duck/selectors', () => {
    const buildState = (tree) => ({ pokemons: tree });

    it('getPokemons', () => {
        const pokemons = [ { id: 1, name: "bulbasaur" }, { id: 2, name: "ivysaur"} ];
        const state = buildState({ pokemons });
        expect(
            selectors.getPokemons(state)
        )
        .toEqual(pokemons);
    });

    it('isFetching', () => {
        const isFetching = true;
        const state = buildState({ isFetching });
        expect(
            selectors.isFetching(state)
        )
        .toEqual(isFetching);
    });

    it('getAbilitiesDescriptionsMappedById', () => {
        const abilities = [
            { id: 7, effect_entries: [ { short_effect: "Description7" } ] },
            { id: 27, effect_entries: [ { short_effect: "Description27" } ] },
        ];
        const expected = [];
        expected[7] = "Description7";
        expected[27] = "Description27";

        const state = buildState({ abilities });

        expect(
            selectors.getAbilitiesDescriptionsMappedById(state)
        )
        .toEqual(expected);
    });

    it('getPokemonsOfType');
});