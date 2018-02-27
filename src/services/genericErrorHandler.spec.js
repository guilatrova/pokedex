import handleError from './genericErrorHandler';

describe('services/genericErrorHandler', () => {

    console.warn = jest.fn();
    console.error = jest.fn();
    window.location.replace = jest.fn();

    it('should get error message from response', () => {
        const expected = {
            code: '01',
            message: 'this'
        };
        const apiResponse = {
            response: {
                data: expected
            }
        };

        expect(handleError(apiResponse)).toEqual(expected);
    });

    it('should handle default errors', () => {
        const expected = {
            detail: 'default error'
        };
        const err = {
            message: 'default error'
        };

        expect(handleError(err)).toEqual(expected);
        expect(console.error).toBeCalled();

    });

    it('should redirect when token expires', () => {
        const apiResponse = {
            response: {
                status: 401,
                data: { detail: 'Token has expired'}
            }
        };        

        handleError(apiResponse);
        
        expect(window.location.replace).toBeCalled();
        expect(window.location.replace).toBeCalledWith('null/Login');

    });
});