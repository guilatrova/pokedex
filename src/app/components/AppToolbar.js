import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import IconButton from 'material-ui/IconButton';

import { drawerWidth, anchor, title } from '../contants';

const styles = theme => ({
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        flexGrow: 1
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
		marginLeft: drawerWidth,
	},
	'appBarShift-right': {
		marginRight: drawerWidth,
	},
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    title: {
        flex: 1
    }
});

const AppToolbar = ({ classes, open, handleDrawerOpen }) => {
    return (
        <AppBar 
            className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-${anchor}`]]: open,
            })}
        >
            <Toolbar disableGutters={!open}>
                <IconButton
                    color="secondary"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="title" color="inherit" className={classes.title} noWrap>
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

AppToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(AppToolbar);