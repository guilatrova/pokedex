import actions from './actions';
import { GetOperation } from '../../common/duck/operations';

export class FetchPokemonOperation extends GetOperation {
    constructor(search) {
        super(actions.fetchPokemon, actions.receivePokemon);
        this.search = search;
    }

    getEndpoint = () => `pokemon/${this.search}`;
}

export class FetchAbilityOperation extends GetOperation {
    constructor(id) {
        super(actions.fetchAbility, actions.receiveAbility);
        this.id = id;
    }

    getEndpoint = () => `ability/${this.id}`;
}

export class FetchPokemonsByType extends GetOperation {
    constructor(id) {
        super(actions.fetchPokemonsByType, actions.receivePokemonsByType);
        this.id = id;
    }

    getEndpoint = () => `type/${this.id}`;
}

const fetchPokemon = (search) => new FetchPokemonOperation(search).dispatch();
const fetchAbility = (id) => new FetchAbilityOperation(id).dispatch();
const fetchPokemonsByType = (id) => new FetchPokemonsByType(id).dispatch();
const releasePokemon = actions.releasePokemon;

export default {
    fetchPokemon,
    fetchAbility,
    fetchPokemonsByType,
    releasePokemon
};