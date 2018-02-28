import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { operations, selectors } from '../duck';

import PokemonSearch from '../components/PokemonSearch';
import ReleasePokemonConfirmDialog from '../components/ReleasePokemonConfirmDialog';
import PokemonGrid from './PokemonGrid';

class PokedexPage extends React.Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        onRelease: PropTypes.func.isRequired
    }

    state = {
        openReleaseDialog: false,
        releasePokemon: null
    }

    handleReleaseRequest = (releasePokemon) => this.setState({ openReleaseDialog: true, releasePokemon });

    handleCloseReleaseDialog = () => this.setState({ openReleaseDialog: false, releasePokemon: null });

    handleReleaseConfirm = () => {
        this.props.onRelease(this.state.releasePokemon.id);
        this.handleCloseReleaseDialog();
    }

    render() {
        const { onSearch, isFetching } = this.props;
        const { openReleaseDialog, releasePokemon } = this.state;

        return (
            <div>
                <PokemonSearch onSearch={onSearch} isFetching={isFetching} />

                <PokemonGrid onRelease={this.handleReleaseRequest} />

                <ReleasePokemonConfirmDialog 
                    open={openReleaseDialog} 
                    name={releasePokemon ? releasePokemon.name : null}
                    onConfirm={this.handleReleaseConfirm}
                    onClose={this.handleCloseReleaseDialog}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: selectors.isFetching(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (search) => dispatch(operations.fetchPokemon(search)),
        onRelease: (id) => dispatch(operations.releasePokemon(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokedexPage);