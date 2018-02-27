import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectors } from '../duck';

import PokemonCard from '../components/PokemonCard';
import Grid from 'material-ui/Grid';

class PokemonGrid extends React.Component {
    static propTypes = {
        pokemons: PropTypes.array.isRequired
    }

    render() {
        const { pokemons } = this.props;
        console.log(pokemons);

        const cards = pokemons.map(pokemon => {
            return (
                <PokemonCard 
                    key={pokemon.id} 
                    number={pokemon.id} 
                    name={pokemon.name} 
                    image={pokemon.sprites.front_default}
                    type={"NULL"} />
            );
        });

        return (
            <div>
                <Grid container spacing={16}>
                    {cards}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: selectors.getPokemons(state)
    };
};

export default connect(mapStateToProps)(PokemonGrid);