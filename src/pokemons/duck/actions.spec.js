import operations from './operations';
import actions from './actions';
import types from './types';

describe('pokemons/duck/actions', () => {
    let store, mock, restoreMock;

    beforeEach(() => {
        const mockHelper = mockAxios({
            pokemons: {
                pokemons: [],
                owned: [],
                abilities: [],
                filteredTypePokemons: {},
                isFetching: false,
                errors: {},
            }
        });
        mock = mockHelper.mock;
		store = mockHelper.store;
		restoreMock = mockHelper.restoreMock;
    });

    afterEach(() => {
		restoreMock();
    });
    
    describe("FETCH_POKEMON", () => {
        it('should dispatch success action when ok', () => {
            const pokemon = { id: 1, name: "bulbasaur" };
            const expectedActions = [
                { type: types.FETCH_POKEMON },
                { type: types.FETCH_POKEMON, result: 'success', pokemon}
            ];

            mock.onGet().reply(200, pokemon);

            return store.dispatch(operations.fetchPokemon(1)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should catch pokemon when successful if requested', () => {
            const pokemon = { id: 1, name: "bulbasaur" };
            const id = 1;
            const expectedActions = [
                { type: types.FETCH_POKEMON },
                { type: types.CATCH_POKEMON, id },
                { type: types.FETCH_POKEMON, result: 'success', pokemon}
            ];

            mock.onGet().reply(200, pokemon);

            return store.dispatch(operations.fetchPokemon(id, true)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should dispatch fail action when something goes wrong', () => {
            const errors = { detail: "not found" };
            const expectedActions = [
                { type: types.FETCH_POKEMON },
                { type: types.FETCH_POKEMON, result: 'fail', errors }
            ];

            mock.onGet().reply(404, errors);

            return store.dispatch(operations.fetchPokemon("error")).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe("RELEASE_POKEMON", () => {

        it('is created correctly', () => {
            const id = 25;
            const expectedAction = { 
                type: types.RELEASE_POKEMON, id: 25 
            };

            expect(actions.releasePokemon(id)).toEqual(expectedAction);
        });
    });

    describe("CATCH_POKEMON", () => {
        it('is created correctly', () => {
            const id = 1;
            const expectedAction = { 
                type: types.CATCH_POKEMON, id
            };

            expect(actions.catchPokemon(id)).toEqual(expectedAction);
        });
    });

    describe("FETCH_ABILITY", () => {

        it('should dispatch success action when ok', () => {
            const ability = { id: 1, name: "ability" };
            const expectedActions = [
                { type: types.FETCH_ABILITY },
                { type: types.FETCH_ABILITY, result: 'success', ability }
            ];

            mock.onGet().reply(200, ability);
            
            return store.dispatch(operations.fetchAbility(1)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should dispatch fail action when something goes wrong', () => {
            const errors = { detail: "not found" };
            const expectedActions = [
                { type: types.FETCH_ABILITY },
                { type: types.FETCH_ABILITY, result: 'fail', errors }
            ];

            mock.onGet().reply(404, errors);

            return store.dispatch(operations.fetchAbility(1)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });

    describe("FETCH_POKEMONS_BY_TYPE", () => {

        it('should dispatch success action when ok', () => {
            const pokemonsByType = { id: 1, name: "fire" };
            const expectedActions = [
                { type: types.FETCH_POKEMONS_BY_TYPE },
                { type: types.FETCH_POKEMONS_BY_TYPE, result: 'success', pokemonsByType }
            ];

            mock.onGet().reply(200, pokemonsByType);
            
            return store.dispatch(operations.fetchPokemonsByType(1)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('should dispatch fail action when something goes wrong', () => {
            const errors = { detail: "not found" };
            const expectedActions = [
                { type: types.FETCH_POKEMONS_BY_TYPE },
                { type: types.FETCH_POKEMONS_BY_TYPE, result: 'fail', errors }
            ];

            mock.onGet().reply(404, errors);

            return store.dispatch(operations.fetchPokemonsByType(1)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});