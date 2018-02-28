import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TypeChip from './TypeChip';

const styles = {
    card: {
        width: 200
    },
    image: {
        display: 'block',
        margin: 'auto'
    }
};

const PokemonCard = ({ number, name, types, image, classes, onRelease, onSeeDetails }) => {
    return (
        <Card className={classes.card}>

            <CardContent>
                <div>
                    <img className={classes.image} src={image} /> 
                </div>

                <Typography variant="title" gutterBottom>
                    # {number} {name}
                </Typography>

                {types.map((name, idx) => <TypeChip key={idx} label={name} />)}
            </CardContent>

            <CardActions>
                <Button size="small" color="primary" onClick={onSeeDetails}>
                    DETAILS
                </Button>
                <Button size="small" color="primary" onClick={onRelease}>
                    RELEASE
                </Button>
            </CardActions>
        </Card>
    );
};

PokemonCard.propTypes = {
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    onRelease: PropTypes.func.isRequired,
    onSeeDetails: PropTypes.func.isRequired,
};

export default withStyles(styles)(PokemonCard);