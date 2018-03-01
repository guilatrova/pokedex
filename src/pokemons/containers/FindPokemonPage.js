import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { operations, selectors } from '../duck';
import BasePokemonPageWrapper from './BasePokemonPageWrapper';

class FindPokemonPage extends React.Component {
    static propTypes = {
        type: PropTypes.string.isRequired,
        pokemons: PropTypes.array.isRequired,
        fetchByType: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.fetchByType(this.props.type);
    }

    render() {
        const { type, pokemons } = this.props;
        

        return (
            <div>
                <BasePokemonPageWrapper pokemons={pokemons}>
                    <h1>{type}</h1>
                </BasePokemonPageWrapper>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { type } = ownProps.match.params;
    return {
        type,
        pokemons: selectors.getPokemonsOfType(state, type)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchByType: (type) => dispatch(operations.fetchPokemonsByType(type))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindPokemonPage);