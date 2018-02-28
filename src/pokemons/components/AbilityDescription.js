import React from 'react';
import PropTypes from 'prop-types';

import { CircularProgress } from 'material-ui/Progress';

const AbilityDescription = ({ selected, abilities }) => {
    if (!selected)
        return null;

    return abilities[selected] || <CircularProgress />;
};

AbilityDescription.propTypes = {
    selected: PropTypes.number,
    abilities: PropTypes.array.isRequired
};

export default AbilityDescription;