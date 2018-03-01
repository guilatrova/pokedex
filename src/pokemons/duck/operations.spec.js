import { FetchPokemonOperation, FetchAbilityOperation, FetchPokemonsByType } from './operations';

describe('pokemons/duck/operations', () => {

    describe("FetchPokemonOperation", () => {
        it('generates correct api endpoint', () => {
            const operation = new FetchPokemonOperation("search");
            expect(operation.getEndpoint()).toMatch("pokemon/search");
        });
    });

    describe("FetchAbilityOperation", () => {
        it('generates correct api endpoint', () => {
            const operation = new FetchAbilityOperation(65);
            expect(operation.getEndpoint()).toMatch("ability/65");
        });
    });

    describe('FetchPokemonsByType', () => {
        it('generates correct api endpoint', () => {
            const operation = new FetchPokemonsByType(50);
            expect(operation.getEndpoint()).toMatch("type/50");
        });
    });

});