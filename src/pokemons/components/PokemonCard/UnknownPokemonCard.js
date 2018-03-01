import React from 'react';
import PropTypes from 'prop-types';

import BasePokemonCard from './BasePokemonCard';

const createActions = (findAction) => ([
    { label: "FIND", onClick: findAction }
]);

const UnknownPokemonCard = ({ onFind, ...props}) => {
    return (
        <BasePokemonCard 
            {...props} 
            actions={createActions(onFind)} 
        />
    );
};

UnknownPokemonCard.propTypes = {
    ...BasePokemonCard.propTypes,
    onFind: PropTypes.func.isRequired,
};

export default UnknownPokemonCard;