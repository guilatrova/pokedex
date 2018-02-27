import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import * as apiModule from '../../src/services/api';

export const mockAxios = () => {
    const axiosInstance = apiModule.default();
    // eslint-disable-next-line
    apiModule.default = jest.fn();
    apiModule.default.mockReturnValue(axiosInstance);

    const middlewares = [ thunk ];
    const mockStore = configureMockStore(middlewares);

    const store = mockStore();
    const mock = new MockAdapter(axiosInstance);
    const restoreMock = () => apiModule.default.mockRestore();

    return { mock, store, restoreMock };
};