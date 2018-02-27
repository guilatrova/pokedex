import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const DrawerItem = ({ icon, text, to }) => {
    return (
        <Link to={to}>
            <ListItem button>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                
                <ListItemText primary={text} />
            </ListItem>
        </Link>
    );
};

DrawerItem.propTypes = {
    icon: PropTypes.node,
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

export default DrawerItem;