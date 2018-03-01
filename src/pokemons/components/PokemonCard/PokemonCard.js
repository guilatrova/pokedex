import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectors } from '../../duck';
import OwnedPokemonCard from './OwnedPokemonCard';
import KnownPokemonCard from './KnownPokemonCard';
import UnknownPokemonCard from './UnknownPokemonCard';

const PokemonCard = ({ pokemon, isKnown, isCaught, image, isFetching, onCatch, onRelease, onSeeDetails, onFind }) => {
    const basicProps = {
        number: pokemon.id,
        name: pokemon.name,
        image
    };

    if (isCaught) {
        return (
            <OwnedPokemonCard 
                {...basicProps}
                types={pokemon.types ? pokemon.types.map(t => t.type.name) : []}
                onRelease={onRelease}
                onSeeDetails={onSeeDetails}
            />                
        );
    }

    if (isKnown) {
        return (
            <KnownPokemonCard
                {...basicProps}
                types={pokemon.types ? pokemon.types.map(t => t.type.name) : []}
                onCatch={onCatch}
                onSeeDetails={onSeeDetails}
            />
        );
    }

    return (
        <UnknownPokemonCard
            {...basicProps}
            onFind={onFind}
            isFetching={isFetching}
        />
    );
};

PokemonCard.propTypes = {
    pokemon: PropTypes.object.isRequired,
    isKnown: PropTypes.bool.isRequired, 
    isCaught: PropTypes.bool.isRequired,
    isFetching: PropTypes.bool, 
    image: PropTypes.string, 
    onCatch: PropTypes.func, 
    onRelease: PropTypes.func, 
    onSeeDetails: PropTypes.func, 
    onFind: PropTypes.func
};

const mapStateToProps = (state, ownProps) => {
    const { pokemon } = ownProps;
    return {
        image: selectors.getPokemonImage(state, pokemon.id),
        isCaught: selectors.isPokemonCaught(state, pokemon.id),
        isKnown: selectors.isPokemonKnown(state, pokemon.id),
        isFetching: selectors.isFetching(state)
    };
};

export default connect(mapStateToProps)(PokemonCard);