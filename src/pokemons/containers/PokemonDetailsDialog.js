import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

import PokemonDetails from '../components/PokemonDetails';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const PokemonDetailsDialog = ({ open, pokemon, onClose}) => {
    if (!pokemon)
        return null;

    return (
        <Dialog
            open={open}
            transition={Transition}
            keepMounted
            onClose={onClose}>

            <DialogTitle>
                #{pokemon.id} {pokemon.name}
            </DialogTitle>
                
            <DialogContent>
                <PokemonDetails pokemon={pokemon} />
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

PokemonDetailsDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    pokemon: PropTypes.object,
};    

export default PokemonDetailsDialog;