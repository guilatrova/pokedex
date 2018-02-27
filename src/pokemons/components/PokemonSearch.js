import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

import TextFieldError from '../../common/components/TextFieldError';

class PokemonSearch extends React.Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired
    }

    state = {
        search: ""
    }

    onChangeInputValue = (name) => (e) => {
        this.setState({ [name]: e.target.value });
    }

    onSearch = () => {
        this.props.onSearch(this.state.search);
    }

    render() {
        return (
            <div>
                <TextFieldError
                    label="Search pokemon"
                    value={this.state.search}
                    onChange={this.onChangeInputValue("search")}
                />

                <Button variant="raised" color="primary"onClick={this.onSearch}>
                    Catch it!
                </Button>

            </div>
        );
    }
}

export default PokemonSearch;