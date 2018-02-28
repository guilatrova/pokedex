import reducer from './reducers';
import actions from './actions';

describe('pokemons/duck/reducers', () => {

    const initialState = {
        pokemons: [],
        abilities: [],
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
                ...initialState,
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
                ...initialState,
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
                ...initialState,
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
                ...initialState,
                pokemons: [ createPokemon(1, 'bulbasaur') ],
                isFetching: false,
                errors: {}
            });
        });

    });

    describe("FETCH_ABILITY", () => {

        it('should be handled', () => {
            expect(
                reducer(undefined, actions.fetchAbility())
            ).toEqual({
                ...initialState,
                abilities: [],
                isFetching: true,
                errors: {}
            });
        });

        it('should be handled when successful', () => {
            const data = { id: 1 };
            expect(
                reducer(fetchingState, actions.receiveAbility('success', data))
            ).toEqual({
                ...initialState,
                abilities: [ data ],
                isFetching: false,
                errors: {}
            });
        });

        it('should be handled when failed', () => {
            const errors = { detail: 'unknown error' };
            expect(
                reducer(fetchingState, actions.receiveAbility('fail', errors))
            ).toEqual({
                ...initialState,
                abilities: [],
                isFetching: false,
                errors
            });
        });

    });
});