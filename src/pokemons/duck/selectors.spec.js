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

    describe('getPokemonsOfType', () => {
        it('when type exists', () => {
            const pokemons = [ { name: 'pikachu '} ];
            const filteredTypePokemons = { electric: pokemons };
            const state = buildState({ filteredTypePokemons });

            expect(
                selectors.getPokemonsOfType(state, 'electric')
            )
            .toEqual(pokemons);

        });

        it('when type doesnt exists', () => {
            const state = buildState({ filteredTypePokemons: {} });
            expect(
                selectors.getPokemonsOfType(state, 'electric')
            )
            .toEqual([]);
        });
    });

    it('getPokemonsImagesMappedById', () => {
        const pokemons = [ 
            { id: 25, name: 'pikachu', sprites: { front_default: "pikachu_image" } },
            { id: 26, name: 'raichu', sprites: { front_default: "raichu_image" } },
        ];
        const expected = [];
        expected[25] = "pikachu_image";
        expected[26] = "raichu_image";

        const state = buildState({ pokemons });

        expect(
            selectors.getPokemonsImagesMappedById(state)
        )
        .toEqual(expected);
    });
});