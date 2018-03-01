/* eslint-disable no-unused-vars */
import createApi from './../../services/api';
import handleError from './../../services/genericErrorHandler';

export class Operation {
    constructor(requestAction, receiveAction) {
        this.requestAction = requestAction;
        this.receiveAction = receiveAction;
    }

    dispatch = () => (dispatch, getState) => {
        if (!this.shouldDispatch(getState)) {
            this.onNotDispatched(dispatch, getState);
            return Promise.resolve();
        }

        this.onRequest(dispatch, this.requestAction);
        
        const api = this.createApiService();
        return this.getApiPromise(api)
            .then(response => this.onGetResponse(response))
            .then(data => this.onSucceed(dispatch, this.receiveAction, this.getSucceedData(data)))
            .catch(err => this.onFailed(dispatch, this.receiveAction, err));
    }

    shouldDispatch(getState) {
        return true;
    }

    onNotDispatched(dispatch, getState) { } 

    createApiService() {
        return createApi();
    }

    onGetResponse(response) {
        return response.data;
    }
    
    onRequest(dispatch, requestAction) {
        dispatch(requestAction());
    }

    onSucceed(dispatch, receiveAction, data) {
        return dispatch(receiveAction('success', data));        
    }

    onFailed(dispatch, receiveAction, errors) {
        return dispatch(receiveAction('fail', handleError(errors)));
    }

    getSucceedData(raw) {
        return raw;
    }
    
    getApiPromise(api) { }
}

export class GetOperation extends Operation {
    constructor(requestAction, receiveAction) {
        super(requestAction, receiveAction);
    }

    getEndpoint() {
        return "";
    }

    getApiPromise(api) {
        return api.get(this.getEndpoint());
    }
}