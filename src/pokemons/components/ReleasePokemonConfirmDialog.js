import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const ReleasePokemonConfirmDialog = ({ open, name, onConfirm, onClose}) => {
    return (
        <Dialog
            open={open}
            transition={Transition}
            keepMounted
            onClose={onClose}>

            <DialogTitle>
                Release this pokemon?
            </DialogTitle>
                
            <DialogContent>
                <DialogContentText>
                    {name} will miss you. Are you really sure?
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>

                <Button onClick={onConfirm} color="primary">
                    Release
                </Button>
            </DialogActions>
        </Dialog>
    );
};

ReleasePokemonConfirmDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    name: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
};    

export default ReleasePokemonConfirmDialog;