import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectors } from '../duck';
import BasePokemonCard from '../components/BasePokemonCard';
import OwnedPokemonCard from '../components/OwnedPokemonCard';
import Grid from 'material-ui/Grid';

const PokemonGrid = ({ pokemons, ownedPokemonsIds, images, onRelease, onSeeDetails }) => {
    const cards = pokemons.map(pokemon => {
        if (ownedPokemonsIds.includes(pokemon.id)) {
            return (
                <Grid key={pokemon.id} item>
                    <OwnedPokemonCard
                        number={pokemon.id} 
                        name={pokemon.name} 
                        image={images[pokemon.id]}
                        types={pokemon.types ? pokemon.types.map(t => t.type.name) : []}
                        onRelease={() => onRelease(pokemon)}
                        onSeeDetails={() => onSeeDetails(pokemon)} />
                </Grid>
            );
        }

        return (
            <Grid key={pokemon.id} item>
                <BasePokemonCard
                    number={pokemon.id} 
                    name={pokemon.name} 
                    image={images[pokemon.id]}
                    types={[]}
                    />
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
    images: PropTypes.array.isRequired,
    ownedPokemonsIds: PropTypes.array.isRequired,
    onRelease: PropTypes.func.isRequired,
    onSeeDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    images: selectors.getPokemonsImagesMappedById(state),
    ownedPokemonsIds: selectors.getOwnedPokemonsIds(state)    
});

export default connect(mapStateToProps)(PokemonGrid);