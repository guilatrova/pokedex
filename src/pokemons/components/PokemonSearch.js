import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import TextFieldError from '../../common/components/TextFieldError';

const styles = theme => ({
    root: {
        margin: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '40%'
    }
});

class PokemonSearch extends React.Component {
    static propTypes = {
        onSearch: PropTypes.func.isRequired,
        isFetching: PropTypes.bool.isRequired,
        classes: PropTypes.object.isRequired
    }

    state = {
        search: ""
    }

    onChangeInputValue = (name) => (e) => {
        this.setState({ [name]: e.target.value });
    }

    onSearch = () => {
        this.props.onSearch(this.state.search).then(() => {
            this.setState({ search: "" });
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <TextFieldError
                    className={classes.textField}
                    label="Search pokemon"
                    value={this.state.search}
                    onChange={this.onChangeInputValue("search")}
                />

                <Button variant="raised" color="primary" disabled={this.props.isFetching || !this.state.search} onClick={this.onSearch}>
                    Catch it!
                </Button>

            </div>
        );
    }
}

export default withStyles(styles)(PokemonSearch);