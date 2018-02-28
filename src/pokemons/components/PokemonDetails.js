import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = {
    float: {
        float: 'left'
    }
};

const PokemonDetails = ({ pokemon, classes }) => {
    return (
        <Grid container>
            <Grid item>
                <img className={classes.float} src={pokemon.sprites.front_default} />

                <Typography className={classes.float} variant="headline" gutterBottom>
                    # {pokemon.id} {pokemon.name}
                </Typography>

                <Typography className={classes.flaot} variant="subheading">
                    {pokemon.types.map(t => t.type.name + ",")}
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
        </Grid>
    );
};

export default withStyles(styles)(PokemonDetails);
