import React from 'react';
import PropTypes from 'prop-types';

import BasePokemonCard from './BasePokemonCard';

const createActions = (releaseAction, detailsAction) => ([
    { label: "DETAILS", onClick: detailsAction },
    { label: "RELEASE", onClick: releaseAction },
]);

const OwnedPokemonCard = ({ onRelease, onSeeDetails, ...props}) => {
    return (
        <BasePokemonCard 
            {...props} 
            actions={createActions(onRelease, onSeeDetails)} 
        />
    );
};

OwnedPokemonCard.propTypes = {
    ...BasePokemonCard.propTypes,
    onRelease: PropTypes.func.isRequired,
    onSeeDetails: PropTypes.func.isRequired,
};

export default OwnedPokemonCard;