import { filterUniqueStringsArray } from './strings';

describe('strings', () => {
    
    it('filterUniqueStringsArray', () => {
        expect(
            filterUniqueStringsArray([1, 2, 2, 3, 3, 4, 5, 5, 5, 5])
        ).toEqual([1, 2, 3, 4, 5]);
    });

});