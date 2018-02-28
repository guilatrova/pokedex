import React from 'react';
import PropTypes from 'prop-types';

import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';


const TextFieldError = ({label, error, className, ...other}) => {        
    return (
        <FormControl error={!!error} className={className}>
            <InputLabel htmlFor="name-error">{label}</InputLabel>
            <Input id="name-error" {...other} />
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    );    
};

TextFieldError.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    error: PropTypes.string
};

export default TextFieldError;