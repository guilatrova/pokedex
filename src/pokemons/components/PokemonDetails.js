import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import StatsTable from './StatsTable';
import TypeChip from './TypeChip';

const styles = {
    float: {
        float: 'left'
    }
};

const PokemonDetails = ({ pokemon, classes }) => {
    //Stat doesnt have id prop, so we need to set it to avoid errors
    const stats = pokemon.stats.map((s, id) => ({ id, ...s }));

    return (
        <Grid container>
            <Grid item>
                <img className={classes.float} src={pokemon.sprites.front_default} />

                <Typography className={classes.float} variant="headline" gutterBottom>
                    # {pokemon.id} {pokemon.name}
                </Typography>

                <Typography className={classes.flaot} variant="subheading">
                    {pokemon.types.map(type => <TypeChip key={type.slot} label={type.type.name} />)}
                </Typography>

            </Grid>

            <Grid item>
                <Typography variant="body1" gutterBottom>
                    Weight: {pokemon.weight}
                </Typography>

                <Typography variant="body1" gutterBottom>
                    Height: {pokemon.height}
                </Typography>
            </Grid>

            <Grid item>
                <Typography variant="title" gutterBottom>
                    Abilities
                </Typography>

                <Typography variant="subheading">
                    {pokemon.abilities.map(t => t.ability.name + ",")}
                </Typography>
            </Grid>

            <Grid item>
                <Typography variant="title" gutterBottom>
                    Stats
                </Typography>

                <StatsTable stats={stats} />
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(PokemonDetails);
