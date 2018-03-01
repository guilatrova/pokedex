import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { operations } from '../duck';

import ReleasePokemonConfirmDialog from '../components/ReleasePokemonConfirmDialog';
import PokemonDetailsDialog from './PokemonDetailsDialog';
import PokemonGrid from './PokemonGrid';

class BasePokemonPageWrapper extends React.Component {
    static propTypes = {
        pokemons: PropTypes.array.isRequired,
        onRelease: PropTypes.func.isRequired,
        onCatch: PropTypes.func.isRequired,
        onFind: PropTypes.func.isRequired,
        children: PropTypes.node
    }

    state = {
        openReleaseDialog: false,
        openDetails: false,
        releasePokemon: null,
        detailsPokemon: null
    }

    handleReleaseRequest = (releasePokemon) => this.setState({ openReleaseDialog: true, releasePokemon });

    handleCloseReleaseDialog = () => this.setState({ openReleaseDialog: false, releasePokemon: null });

    handleReleaseConfirm = () => {
        this.props.onRelease(this.state.releasePokemon.id);
        this.handleCloseReleaseDialog();
    }

    handleOpenDetails = (detailsPokemon) => this.setState({ openDetails: true, detailsPokemon });

    handleCloseDetails = () => this.setState({ openDetails: false, detailsPokemon: null });

    render() {
        const { pokemons, onFind, onCatch, children } = this.props;
        const { openReleaseDialog, releasePokemon, openDetails, detailsPokemon } = this.state;

        return (
            <div>
                {children}

                <PokemonGrid 
                    pokemons={pokemons}                
                    onSeeDetails={this.handleOpenDetails} 
                    onRelease={this.handleReleaseRequest}
                    onFind={onFind}
                    onCatch={onCatch}
                />

                <ReleasePokemonConfirmDialog 
                    open={openReleaseDialog} 
                    name={releasePokemon ? releasePokemon.name : null}
                    onConfirm={this.handleReleaseConfirm}
                    onClose={this.handleCloseReleaseDialog}
                />

                <PokemonDetailsDialog
                    open={openDetails}
                    pokemon={detailsPokemon}
                    onClose={this.handleCloseDetails}
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRelease: (id) => dispatch(operations.releasePokemon(id)),
        onCatch: (id) => dispatch(operations.catchPokemon(id)),
        onFind: (id) => dispatch(operations.fetchPokemon(id))
    };
};

export default connect(null, mapDispatchToProps)(BasePokemonPageWrapper);