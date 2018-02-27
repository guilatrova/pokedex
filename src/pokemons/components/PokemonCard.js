import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {
    card: {
        width: 200
    },
    image: {
        display: 'block',
        margin: 'auto'
    }
};

class PokemonCard extends React.Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        classes: PropTypes.object.isRequired
    }

    onClick = () => {}

    render() {
        const { number, name, type, image, classes } = this.props;
        return (
            <Card className={classes.card}>

                <CardContent>
                    <div>
                        <img className={classes.image} src={image} /> 
                    </div>

                    <Typography variant="title" gutterBottom>
                        # {number} {name}
                    </Typography>

                    <Typography component="p">
                        {type}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" color="primary">
                        DETALHES
                    </Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(PokemonCard);