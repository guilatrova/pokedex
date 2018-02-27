import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';

const ErrorTypography = ({ children }) => {
    return (
        <div>
            {children && <Typography color="error" type="body2">
                {children}
            </Typography>}
        </div>
    );
};

ErrorTypography.propTypes = {
    children: PropTypes.node
};

export default ErrorTypography;