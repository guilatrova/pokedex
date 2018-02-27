import React from 'react';
import PropTypes from 'prop-types';

import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';


const TextFieldError = ({label, error, ...other}) => {        
    return (
        <div>
            <FormControl error={!!error}>
                <InputLabel htmlFor="name-error">{label}</InputLabel>
                <Input id="name-error" {...other} />
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </div>
    );    
};

TextFieldError.propTypes = {
    classes: PropTypes.object,
    label: PropTypes.string.isRequired,
    error: PropTypes.string
};

export default TextFieldError;