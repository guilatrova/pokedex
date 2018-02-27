import { FetchOperation } from './operations';

describe('pokemons/duck/operations', () => {

    describe("FetchOperations", () => {
        it('generates correct api endpoint', () => {
            const operation = new FetchOperation("search");
            expect(operation.getEndpoint()).toMatch("pokemon/search");
        });
    });

});