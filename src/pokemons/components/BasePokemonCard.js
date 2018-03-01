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

const BasePokemonCard = ({ number, name, types, image, classes, actions }) => {
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
                {actions.map((action, idx) => {
                    return (
                        <Button key={idx} size="small" color="primary" onClick={action.onClick}>
                            {action.label}
                        </Button>
                    );
                })}
            </CardActions>
        </Card>
    );
};

BasePokemonCard.propTypes = {
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    actions: PropTypes.array.isRequired
};

BasePokemonCard.defaultProps = {
    image: "http://via.placeholder.com/96x96",
    actions: []
};

export default withStyles(styles)(BasePokemonCard);