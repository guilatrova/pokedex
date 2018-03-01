import reducer from './reducers';
import actions from './actions';

describe('pokemons/duck/reducers', () => {

    const initialState = {
        pokemons: [],
        owned: [],
        abilities: [],
        filteredTypePokemons: {},
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
                owned: [],
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
                owned: [],
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
                owned: [],
                isFetching: false,
                errors
            });
        });

    });

    describe("RELEASE_POKEMON", () => {

        const createPokemon = (id, name) => ({ id, name });
        const somePokemonsState = {
            ...initialState,
            pokemons: [ createPokemon(1, 'bulbasaur'), createPokemon(25, 'pikachu') ],
            owned: [ 1, 25 ]
        };

        it('should remove pokemon from list', () => {
            expect(
                reducer(somePokemonsState, actions.releasePokemon(25))
            ).toEqual({
                ...initialState,
                pokemons: [ createPokemon(1, 'bulbasaur'), createPokemon(25, 'pikachu') ],
                owned: [ 1 ],
                isFetching: false,
                errors: {}
            });
        });

    });

    describe("CATCH_POKEMON", () => {

        const somePokemonsState = {
            ...initialState,
            owned: [ 1, 25 ]
        };

        it('should add pokemon to owned list', () => {
            expect(
                reducer(somePokemonsState, actions.catchPokemon(4))
            ).toEqual({
                ...initialState,
                owned: [ 1, 25, 4 ],
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

    describe("FETCH_POKEMONS_BY_TYPE", () => {

        it('should be handled', () => {
            expect(
                reducer(undefined, actions.fetchPokemonsByType("electric"))
            ).toEqual({
                ...initialState,
                filteredTypePokemons: {},
                isFetching: true,
                errors: {}
            });
        });

        it('should be handled when successful', () => {
            const createPokemon = name => ({ name });
            const data = { 
                id: 1,
                name: 'electric',
                pokemon: [
                    { pokemon: { ...createPokemon('pikachu'), url: 'api/25/'} },
                    { pokemon: { ...createPokemon('jolten'), url: 'api/50/'} }
                ]
            };

            expect(
                reducer(fetchingState, actions.receivePokemonsByType('success', data))
            ).toEqual({
                ...initialState,
                filteredTypePokemons: {
                    'electric': [
                        { id: 25, url: 'api/25/', ...createPokemon('pikachu') },
                        { id: 50, url: 'api/50/', ...createPokemon('jolten') }
                    ]
                },
                isFetching: false,
                errors: {}
            });
        });

        it('should be handled when failed', () => {
            const errors = { detail: 'unknown error' };
            expect(
                reducer(fetchingState, actions.receivePokemonsByType('fail', errors))
            ).toEqual({
                ...initialState,
                filteredTypePokemons: {},
                isFetching: false,
                errors
            });
        });

    });
});