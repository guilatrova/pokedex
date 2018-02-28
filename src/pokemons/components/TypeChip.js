import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';

const styles = theme => ({
    chip: {
        marginRight: theme.spacing.unit / 2,
    }
});

const TypeChip = ({ label, classes }) => {
    return (
        <Chip label={label} className={classes.chip} />
    );
};

TypeChip.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TypeChip);