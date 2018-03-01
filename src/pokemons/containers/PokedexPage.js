import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { operations, selectors } from '../duck';

import PokemonSearch from '../components/PokemonSearch';
import BasePokemonPageWrapper from './BasePokemonPageWrapper';

class PokedexPage extends React.Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        pokemons: PropTypes.array.isRequired
    }

    render() {
        const { onSearch, isFetching, pokemons } = this.props;

        return (
            <BasePokemonPageWrapper pokemons={pokemons}>
                <PokemonSearch onSearch={onSearch} isFetching={isFetching} />
            </BasePokemonPageWrapper>            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: selectors.getOwnedPokemons(state),
        isFetching: selectors.isFetching(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (search) => dispatch(operations.fetchPokemon(search)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokedexPage);