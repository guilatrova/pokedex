import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { operations, selectors } from '../duck';

import PokemonSearch from '../components/PokemonSearch';
import PokemonCard from '../components/PokemonCard';

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

                <div style={{maxWidth:200}}>
                    <PokemonCard number={1} name="Bulbasaur" type="grass" image="http://via.placeholder.com/96x96" />
                </div>
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