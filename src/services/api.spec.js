import createAPI from './api';
import session from './session';

describe('services/API', () => {
    const SAVED_TOKEN = 'abc123456';

    describe('when session has token', () => {    

        beforeEach(() => {
            session.saveToken(SAVED_TOKEN);
        });

        it('should create AXIOS with correctly authorization header', () => {
            const axiosInstance = createAPI();

            expect(axiosInstance.defaults.headers).toHaveProperty('Authorization');
            expect(axiosInstance.defaults.headers.Authorization).toEqual(`Token ${SAVED_TOKEN}`);
        });

        it('should create AXIOS without header if false is passed', () => {
            const axiosInstance = createAPI(false);

            expect(axiosInstance.defaults.headers).not.toHaveProperty('Authorization');
        });

    });

    describe('when session is empty', () => {

        beforeEach(() => {
            localStorage.clear();
        });

        it('should create AXIOS without authorization header', () => {
            const axiosInstance = createAPI();
            
            expect(axiosInstance.defaults.headers).not.toHaveProperty('Authorization');
        });
    });

});