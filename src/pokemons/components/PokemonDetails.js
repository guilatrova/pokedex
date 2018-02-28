import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import StatsTable from './StatsTable';
import TypeChip from './TypeChip';
import AbilityChip from './AbilityChip';
import { operations, selectors } from '../duck';

const styles = {
    float: {
        float: 'left'
    }
};

const PokemonDetails = ({ pokemon, classes, onFetchAbility }) => {
    //Stat doesnt have id prop, so we need to set it to avoid errors
    const stats = pokemon.stats.map((s, id) => ({ id, ...s }));

    return (
        <Grid container>
            <Grid item xs={12}>
                <img className={classes.float} src={pokemon.sprites.front_default} />

                {pokemon.types.map(type => <TypeChip key={type.slot} label={type.type.name} />)}

                <Typography variant="body1" gutterBottom>
                    Weight: {pokemon.weight}
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Height: {pokemon.height}
                </Typography>

            </Grid>

            <Grid item>
                <Typography variant="title" gutterBottom>
                    Stats
                </Typography>

                <StatsTable stats={stats} />
            </Grid>

            <Grid item>
                <Typography variant="title" gutterBottom>
                    Abilities
                </Typography>

                {pokemon.abilities.map(ability => 
                    <AbilityChip key={ability.slot} label={ability.ability.name} onClick={() => onFetchAbility(ability)} />)
                }
            </Grid>
        </Grid>
    );
};

PokemonDetails.propTypes = {
    pokemon: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    abilitiesDescriptions: PropTypes.array.isRequired,
    onFetchAbility: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        abilitiesDescriptions: selectors.getAbilitiesDescriptionsMappedById(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchAbility: (ability) => dispatch(operations.fetchAbility(ability))
    };
};

export default withStyles(styles)(
    connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)
);
