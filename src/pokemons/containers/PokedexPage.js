import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { operations, selectors } from '../duck';

import PokemonSearch from '../components/PokemonSearch';

class PokedexPage extends React.Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired
    }

    render() {
        const { onSearch, isFetching } = this.props;

        return (
            <div>
                <PokemonSearch onSearch={onSearch} isFetching={isFetching} />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: selectors.isFetching(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (search) => dispatch(operations.fetchPokemon(search))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokedexPage);