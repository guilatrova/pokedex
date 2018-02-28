import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectors } from '../duck';

import PokemonCard from '../components/PokemonCard';
import Grid from 'material-ui/Grid';

const PokemonGrid = ({ pokemons, onRelease }) => {
    const cards = pokemons.map(pokemon => {
        return (
            <Grid key={pokemon.id} item>
                <PokemonCard
                    number={pokemon.id} 
                    name={pokemon.name} 
                    image={pokemon.sprites.front_default}
                    types={pokemon.types.map(t => t.type.name)}
                    onRelease={() => onRelease(pokemon)} />
            </Grid>
        );
    });

    return (
        <div>
            <Grid container justify="center" spacing={16}>
                {cards}
            </Grid>
        </div>
    );
};

PokemonGrid.propTypes = {
    pokemons: PropTypes.array.isRequired,
    onRelease: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        pokemons: selectors.getPokemons(state)
    };
};

export default connect(mapStateToProps)(PokemonGrid);