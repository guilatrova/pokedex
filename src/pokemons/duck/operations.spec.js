import { FetchPokemonOperation, FetchAbilityOperation } from './operations';

describe('pokemons/duck/operations', () => {

    describe("FetchPokemonOperation", () => {
        it('generates correct api endpoint', () => {
            const operation = new FetchPokemonOperation("search");
            expect(operation.getEndpoint()).toMatch("pokemon/search");
        });
    });

    describe("FetchAbilityOperation", () => {
        it('generates correct api endpoint', () => {
            const dummyAbility = {
                ability: {
                    url: "https://pokeapi.co/api/v2/ability/65/"
                }
            };
            const operation = new FetchAbilityOperation(dummyAbility);
            expect(operation.getEndpoint()).toMatch("ability/65");
        });
    });

});