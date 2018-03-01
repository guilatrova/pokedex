import actions from './actions';
import selectors from './selectors';
import { GetOperation } from '../../common/duck/operations';

export class FetchPokemonOperation extends GetOperation {
    constructor(search, caught) {
        super(actions.fetchPokemon, actions.receivePokemon);
        this.search = search;
        this.caught = caught;
    }

    shouldDispatch = (getState) => !selectors.isPokemonCached(getState(), this.search);

    onNotDispatched = (dispatch) => {
        if (this.caught)
            dispatch(actions.catchPokemon(this.search));
    }

    getEndpoint = () => `pokemon/${this.search}`;

    onSucceed(dispatch, receiveAction, data) {
        if (this.caught)
            dispatch(actions.catchPokemon(data.id));
        return super.onSucceed(dispatch, receiveAction, data);
    }
}

export class FetchAbilityOperation extends GetOperation {
    constructor(id) {
        super(actions.fetchAbility, actions.receiveAbility);
        this.id = id;
    }

    shouldDispatch = (getState) => !selectors.isAbilityCached(getState(), this.id);

    getEndpoint = () => `ability/${this.id}`;
}

export class FetchPokemonsByType extends GetOperation {
    constructor(id) {
        super(actions.fetchPokemonsByType, actions.receivePokemonsByType);
        this.id = id;
    }

    shouldDispatch = (getState) => !selectors.isPokemonsByTypeCached(getState(), this.id);

    getEndpoint = () => `type/${this.id}`;
}

const fetchPokemon = (search, caught=false) => new FetchPokemonOperation(search, caught).dispatch();
const fetchAbility = (id) => new FetchAbilityOperation(id).dispatch();
const fetchPokemonsByType = (id) => new FetchPokemonsByType(id).dispatch();
const releasePokemon = actions.releasePokemon;
const catchPokemon = actions.catchPokemon;

export default {
    fetchPokemon,
    fetchAbility,
    fetchPokemonsByType,
    releasePokemon,
    catchPokemon
};