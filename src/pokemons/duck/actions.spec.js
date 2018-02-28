import operations from './operations';
import actions from './actions';
import types from './types';

describe('pokemons/duck/actions', () => {
    let store, mock, restoreMock;

    beforeEach(() => {
        const mockHelper = mockAxios();
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

    describe("FETCH_ABILITY", () => {
        const requestAbility = { ability: { url: "ability/100" } };
        it('should dispatch success action when ok', () => {
            const ability = { id: 1, name: "ability" };
            const expectedActions = [
                { type: types.FETCH_ABILITY },
                { type: types.FETCH_ABILITY, result: 'success', ability }
            ];

            mock.onGet().reply(200, ability);
            
            return store.dispatch(operations.fetchAbility(requestAbility)).then(() => {
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

            return store.dispatch(operations.fetchAbility(requestAbility)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});