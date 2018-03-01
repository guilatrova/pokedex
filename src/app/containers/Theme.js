import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#d01d24',
            light: '#ff5f52',
            dark: '#8e0000',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ffcdd2',
            light: '#ffffff',
            dark: '#cb9ca1',
            contrastText: '#000000',
        },
    },
});

const PokemonTheme = ({ children }) => {
    return (
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    );
};

PokemonTheme.propTypes = {
    children: PropTypes.node.isRequired
};

export default PokemonTheme;