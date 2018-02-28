import { buildQueryParams, extractIdFromUrl } from './query';

describe('services/query', () => {

    describe('buildQueryParams', () => {
        it('should build one query param', () => {
            const obj = {
                param1: 'ABC'
            };

            expect(buildQueryParams(obj)).toEqual('?param1=ABC');
        });

        it('should build several query params', () => {
            const obj = {
                param1: 'ABC',
                param2: 10,
                param3: 'DEF'
            };

            expect(buildQueryParams(obj)).toEqual('?param1=ABC&param2=10&param3=DEF');
        });
    });

    describe('extractIdFromUrl', () => {
        it('should return only id', () => {
            const url = "https://pokeapi.co/api/v2/ability/94/";
            expect(extractIdFromUrl(url)).toEqual(94);
        });

        it('should ignore possible numbers in middle', () => {
            const url = "https://pokeapi.co/api/v2/whatever/150/ability/142/";
            expect(extractIdFromUrl(url)).toEqual(142);
        });

    });

});