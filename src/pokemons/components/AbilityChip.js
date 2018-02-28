import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';

const styles = theme => ({
    chip: {
        marginRight: theme.spacing.unit / 2,
    }
});

const AbilityChip = ({ label, classes, onFetchAbilityDescription }) => {
    return (
        <Chip label={label} className={classes.chip} onClick={onFetchAbilityDescription} />
    );
};

AbilityChip.propTypes = {
    label: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    onFetchAbilityDescription: PropTypes.func.isRequired
};

export default withStyles(styles)(AbilityChip);