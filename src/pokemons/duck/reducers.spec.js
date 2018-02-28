import reducer from './reducers';
import actions from './actions';

describe('pokemons/duck/reducers', () => {

    const initialState = {
        pokemons: [],
        isFetching: false,
        errors: {},
    };

    const fetchingState = {
        ...initialState,
        isFetching: true,
        errors: {},
    };

    it('should return the inital state', () => {
        expect(
            reducer(undefined, {})            
        ).toEqual(initialState);
    });

    describe("FETCH_POKEMON", () => {

        it('should be handled', () => {
            expect(
                reducer(undefined, actions.fetchPokemon())
            ).toEqual({
                pokemons: [],
                isFetching: true,
                errors: {}
            });
        });

        it('should be handled when successful', () => {
            const data = { id: 1 };
            expect(
                reducer(fetchingState, actions.receivePokemon('success', data))
            ).toEqual({
                pokemons: [ data ],
                isFetching: false,
                errors: {}
            });
        });

        it('should be handled when failed', () => {
            const errors = { detail: 'unknown error' };
            expect(
                reducer(fetchingState, actions.receivePokemon('fail', errors))
            ).toEqual({
                pokemons: [],
                isFetching: false,
                errors
            });
        });

    });


    describe("RELEASE_POKEMON", () => {

        const createPokemon = (id, name) => ({ id, name });
        const somePokemonsState = {
            ...initialState,
            pokemons: [ createPokemon(1, 'bulbasaur'), createPokemon(25, 'pikachu') ]
        };

        it('should remove pokemon from list', () => {
            expect(
                reducer(somePokemonsState, actions.releasePokemon(25))
            ).toEqual({
                pokemons: [ createPokemon(1, 'bulbasaur') ],
                isFetching: false,
                errors: {}
            });
        });

    });

});