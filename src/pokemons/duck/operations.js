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
    constructor(ability) {
        super(actions.fetchAbility, actions.receiveAbility);
        this.ability = ability;
    }

    getEndpoint() {
        const reg = /\d+(?=\D*$)(?=.*)/g;
        const { url } = this.ability.ability;
        const id = reg.exec(url.substring(0, url.length - 1));
        return `ability/${id}`;
    }
}

const fetchPokemon = (search) => new FetchPokemonOperation(search).dispatch();
const fetchAbility = (ability) => new FetchAbilityOperation(ability).dispatch();
const releasePokemon = actions.releasePokemon;

export default {
    fetchPokemon,
    fetchAbility,
    releasePokemon
};