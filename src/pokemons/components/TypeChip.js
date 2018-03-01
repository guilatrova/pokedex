import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Chip from 'material-ui/Chip';

const styles = theme => ({
    chip: {
        marginRight: theme.spacing.unit / 2,
    }
});

const TypeChip = ({ label, classes }) => {
    return (
        <Link to={`/find/${label}`}>
            <Chip label={label} className={classes.chip} onClick={() => {/* Force click pointer */}} />
        </Link>
    );
};

TypeChip.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TypeChip);