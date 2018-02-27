import buildQueryParams from './query';

describe('services/query', () => {

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