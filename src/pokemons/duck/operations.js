import actions from './actions';
import { Operation } from '../../common/duck/operations';

class FetchOperation extends Operation {
    constructor(search) {
        super(actions.fetchPokemon, actions.receivePokemon);
        this.search = search;
    }

    getApiPromise(api) {
        return api.get(`pokemon/${this.search}`);
    }
}

const fetchPokemon = (search) => new FetchOperation(search).dispatch();

export default {
    fetchPokemon
};