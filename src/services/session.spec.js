import session, { TOKEN_KEY } from './session';

describe('services/session', () => {

    const SAVED_TOKEN = 'abc123456';

    beforeEach(() => {
        localStorage.clear();
    });

    it('should save token', () => {
        session.saveToken(SAVED_TOKEN);
        
        expect(localStorage.getItem(TOKEN_KEY)).toEqual(SAVED_TOKEN);
    });

    it('should retrieve token', () => {
        localStorage.setItem(TOKEN_KEY, SAVED_TOKEN);

        expect(session.getToken()).toEqual(SAVED_TOKEN);
    });

    it('authentication should return True when has token', () => {
        localStorage.setItem(TOKEN_KEY, SAVED_TOKEN);
        
        expect(session.isAuthenticated()).toBeTruthy();
    });
});