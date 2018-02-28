import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import { extractIdFromUrl } from '../../utils/query';
import { operations, selectors } from '../duck';
import StatsTable from './StatsTable';
import TypeChip from './TypeChip';
import AbilityChip from './AbilityChip';
import AbilityDescription from './AbilityDescription';

const styles = {
    float: {
        float: 'left'
    },
    abilityDescription: {
        marginTop: 5        
    }
};

class PokemonDetails extends React.Component {
    
    static propTypes = {
        pokemon: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
        abilitiesDescriptions: PropTypes.array.isRequired,
        onFetchAbility: PropTypes.func.isRequired
    };

    state = {
        selectedAbility: null
    }

    handleSelectAbility = (ability) => {
        const id = extractIdFromUrl(ability.ability.url);
        
        this.props.onFetchAbility(id);
        this.setState({ selectedAbility: id });
    }

    render() {
        const { pokemon, classes, abilitiesDescriptions } = this.props;
        const { selectedAbility } = this.state;
        const stats = pokemon.stats.map((s, id) => ({ id, ...s })); //Stat doesnt have id prop, so we need to set it to avoid errors

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

                <Grid item xs={12} md={6}>
                    <Typography variant="title" gutterBottom>
                        Stats
                    </Typography>

                    <StatsTable stats={stats} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="title" gutterBottom>
                        Abilities
                    </Typography>

                    {pokemon.abilities.map(ability => 
                        <AbilityChip key={ability.slot} label={ability.ability.name} onClick={() => this.handleSelectAbility(ability)} />)
                    }

                    <Typography className={classes.abilityDescription} variant="subheading">
                        <AbilityDescription selected={selectedAbility} abilities={abilitiesDescriptions} />
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}

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
