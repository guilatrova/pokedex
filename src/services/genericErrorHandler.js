const UNKNOWN_ERROR_NAME = 'detail';
const TOKEN_EXPIRED_MESSAGE = 'Token has expired';

const isTokenExpiredError = (err) => {
    const { response } = err;
    return (response.status === 401 && response.data['detail'] === TOKEN_EXPIRED_MESSAGE);
};

const redirectToLogin = () => {
    const baseUrl = window.location.origin;
    window.location.replace(`${baseUrl}/Login`);
};

export default function tryHandleAPIResponse(err) {
    if (err.response) {
        if (isTokenExpiredError(err)) {
            console.warn('Expired token detected. Redirecting to login...');
            redirectToLogin();
        }
        return err.response.data;
    }
    else {
        console.error('Unknown error: ' + err.message, err);
        return { [UNKNOWN_ERROR_NAME]: err.message };
    }
}