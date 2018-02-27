export const TOKEN_KEY = 'token';

const saveToken = (value) => localStorage.setItem(TOKEN_KEY, value);

const getToken = () => localStorage.getItem(TOKEN_KEY);

const isAuthenticated = () => !!getToken();

export default {
    saveToken,
    getToken,
    isAuthenticated
};