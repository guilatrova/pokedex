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

    it('getOwnedPokemons', () => {
        const pokemons = [ { id: 1, name: "bulbasaur" }, { id: 2, name: "ivysaur"}, { id: 3, name: "venusaur" } ];
        const owned = [ 1, 2 ];
        const state = buildState({ pokemons, owned });
        expect(
            selectors.getOwnedPokemons(state)
        )
        .toEqual([ pokemons[0], pokemons[1] ]);
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
        it('should map available pokemon', () => {
            const knownPokemon = { id: 25, name: 'pikachu' };
            const unkownPokemon = { id: 50, name: 'jolteon' };
            const pokemons = [ {...knownPokemon, types: { name: 'electric' }} ];
            const filteredPokemons = [ knownPokemon, unkownPokemon ];
            const filteredTypePokemons = { electric: filteredPokemons };
            const expected = [ ...pokemons, unkownPokemon ];

            const state = buildState({ filteredTypePokemons, owned: [ 25 ], pokemons });

            expect(
                selectors.getPokemonsOfType(state, 'electric')
            )
            .toEqual(expected);

        });

        it('when type doesnt exists', () => {
            const state = buildState({ filteredTypePokemons: {}, owned: [], pokemons: [] });
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