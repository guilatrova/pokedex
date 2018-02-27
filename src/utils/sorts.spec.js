import { sort } from './sorts';

describe('sorts', () => {
    
    describe('alpha', () => {

        it('asc', () => {
            expect(sort('a', 'b', 'asc')).toBeLessThan(0);
            expect(sort('b', 'a', 'asc')).toBeGreaterThan(0);
        });

        it('desc', () => {
            expect(sort('b', 'a', 'desc')).toBeLessThan(0);
            expect(sort('a', 'b', 'desc')).toBeGreaterThan(0);
        });

        it('regardless of casing', () => {
            expect(sort('a', 'B', 'asc')).toBeLessThan(0);
            expect(sort('A', 'b', 'asc')).toBeLessThan(0);
        });

    });

    describe('numbers', () => {

        it('asc', () => {
            expect(sort(1, 2, 'asc')).toBeLessThan(0);
            expect(sort(2, 1, 'asc')).toBeGreaterThan(0);
        });

        it('desc', () => {
            expect(sort(2, 1, 'desc')).toBeLessThan(0);
            expect(sort(1, 2, 'desc')).toBeGreaterThan(0);
        });

        it('regardless of its type', () => {
            expect(sort('10', 9, 'asc')).toBeGreaterThan(0);
        });

    });

    describe('alphanumerics', () => {
        
        it('asc', () => {
            expect(sort('a', 1, 'asc')).toBeGreaterThan(0);
            expect(sort(1, 'a', 'asc')).toBeLessThan(0);
        });

        it('desc', () => {
            expect(sort('a', 1, 'desc')).toBeLessThan(0);
            expect(sort(1, 'a', 'desc')).toBeGreaterThan(0);
        });

    });

});