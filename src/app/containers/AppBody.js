import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';

import AppToolbar from '../components/AppToolbar';
import AppDrawer from '../components/AppDrawer';

import { drawerWidth, anchor } from '../contants';

const styles = theme => ({
    root: {
        width: '100%',    
        zIndex: 1,
        overflow: 'hidden'
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },  
    content: {
        width: '100%',        
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            content: {
                height: 'calc(100% - 64px)',
                marginTop: 64,
            },
        },
    },
    'content-left': {
		marginLeft: -drawerWidth,
	},
	'content-right': {
		marginRight: -drawerWidth,
	},
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
		marginLeft: 0,
	},
	'contentShift-right': {
		marginRight: 0,
	},
});

class AppBody extends React.Component {
    state = {
        open: false,
    };
    
    handleDrawerOpen = () => this.setState({ open: true });
    
    handleDrawerClose = () => this.setState({ open: false });
    
    render() {
        const { classes, children } = this.props;
        const { open } = this.state;
        
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                
                    <AppToolbar open={open} handleDrawerOpen={this.handleDrawerOpen} />
                    
                    <AppDrawer open={open} handleDrawerClose={this.handleDrawerClose} />
                    
                    <main 
                        className={classNames(classes.content, classes[`content-${anchor}`], {
                            [classes.contentShift]: open,
                            [classes[`contentShift-${anchor}`]]: open,
                        })}
                    >
                        {children}
                    </main>
                </div>
            </div>
        );
    }
}

AppBody.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.node,
};

export default withStyles(styles, { withTheme: true })(AppBody);