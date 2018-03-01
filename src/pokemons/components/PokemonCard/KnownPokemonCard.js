import React from 'react';
import PropTypes from 'prop-types';

import BasePokemonCard from './BasePokemonCard';

const createActions = (catchAction, detailsAction) => ([
    { label: "DETAILS", onClick: detailsAction },
    { label: "CATCH IT", onClick: catchAction },
]);

const KnownPokemonCard = ({ onSeeDetails, onCatch, ...props}) => {
    return (
        <BasePokemonCard 
            {...props} 
            actions={createActions(onCatch, onSeeDetails)} 
        />
    );
};

KnownPokemonCard.propTypes = {
    ...BasePokemonCard.propTypes,
    onCatch: PropTypes.func.isRequired,
    onSeeDetails: PropTypes.func.isRequired,
};

export default KnownPokemonCard;