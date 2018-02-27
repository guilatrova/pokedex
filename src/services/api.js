import axios from 'axios';
import session from './session';

export const BASE_URL = process.env.API_BASE_URL;

export default function createAPI(addAuthentication = true) {
    let auth = { };
    if (addAuthentication && session.isAuthenticated()) {
        auth = {
            headers: {
                Authorization: `Token ${session.getToken()}`
            },
        };
    }

    return axios.create({
       baseURL: BASE_URL,
       ...auth
    });
}