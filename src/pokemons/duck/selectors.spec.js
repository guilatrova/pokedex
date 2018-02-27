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
});