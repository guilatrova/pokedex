import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { operations, selectors } from '../duck';

import PokemonSearch from '../components/PokemonSearch';
import ReleasePokemonConfirmDialog from '../components/ReleasePokemonConfirmDialog';
import PokemonDetailsDialog from './PokemonDetailsDialog';
import PokemonGrid from './PokemonGrid';

class PokedexPage extends React.Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        onRelease: PropTypes.func.isRequired,
        pokemons: PropTypes.array.isRequired
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

    handleOpenDetails = (detailsPokemon) => this.setState({ openDetails: true, detailsPokemon })

    handleCloseDetails = () => this.setState({ openDetails:false, detailsPokemon: null });

    render() {
        const { onSearch, isFetching, pokemons } = this.props;
        const { openReleaseDialog, releasePokemon, openDetails, detailsPokemon } = this.state;

        return (
            <div>
                <PokemonSearch onSearch={onSearch} isFetching={isFetching} />

                <PokemonGrid 
                    pokemons={pokemons}                
                    onSeeDetails={this.handleOpenDetails} 
                    onRelease={this.handleReleaseRequest} />

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

const mapStateToProps = (state) => {
    return {
        isFetching: selectors.isFetching(state),
        pokemons: selectors.getPokemons(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (search) => dispatch(operations.fetchPokemon(search)),
        onRelease: (id) => dispatch(operations.releasePokemon(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokedexPage);