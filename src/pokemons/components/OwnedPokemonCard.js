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
    number: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.array.isRequired,
    image: PropTypes.string.isRequired,
    onRelease: PropTypes.func.isRequired,
    onSeeDetails: PropTypes.func.isRequired,
};

OwnedPokemonCard.defaultProps = {
    image: "http://via.placeholder.com/96x96"
};

export default OwnedPokemonCard;