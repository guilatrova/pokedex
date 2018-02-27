import actions from './actions';
import { GetOperation } from '../../common/duck/operations';

export class FetchOperation extends GetOperation {
    constructor(search) {
        super(actions.fetchPokemon, actions.receivePokemon);
        this.search = search;
    }

    getEndpoint = () => `pokemon/${this.search}`;
}

const fetchPokemon = (search) => new FetchOperation(search).dispatch();

export default {
    fetchPokemon
};