import React from 'react';
import PropTypes from 'prop-types';

import BasePokemonCard from './BasePokemonCard';

const createActions = (findAction, disabled) => ([
    { label: "FIND", onClick: findAction, disabled }
]);

const UnknownPokemonCard = ({ onFind, isFetching, ...props}) => {
    return (
        <BasePokemonCard 
            {...props} 
            actions={createActions(onFind, isFetching)} 
        />
    );
};

UnknownPokemonCard.propTypes = {
    ...BasePokemonCard.propTypes,
    onFind: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default UnknownPokemonCard;