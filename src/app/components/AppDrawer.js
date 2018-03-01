import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import LabelIcon from 'material-ui-icons/Label';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';

import { drawerWidth } from '../contants';
import DrawerItem from './DrawerItem';

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        height: '100%',
        width: drawerWidth,
    },
    drawerHeader: {
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    drawerHeaderItem: {
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'flex-end',
    },
    drawerHeaderProfile: {
        marginTop: "-30px"
    },
    avatar: {
        width: 100,
        height: 100
    },
    profileName: {
        paddingLeft: 10,
        alignSelf: 'flex-end',
    },
    profileTitle: {
        padding: 5,
        textAlign: 'center'
    }
});

const AppDrawer = ({ classes, theme, open, handleDrawerClose }) => {
    return (
        <Drawer
            variant="persistent"
            classes={{ paper: classes.drawerPaper, }}
            open={open} 
        >
        
            <div className={classes.drawerInner}>

                <div className={classNames(classes.drawerHeader, "profile-header")}>

                    <div className={classes.drawerHeaderItem}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>

                    <div className={classNames(classes.drawerHeaderItem, classes.drawerHeaderProfile)}>
                        <a href="https://www.linkedin.com/in/guilhermelatrova/" target="_blank">
                            <Avatar
                                alt="Guilherme Latrova"
                                src={require('../../images/profile.jpg')}
                                className={classes.avatar}
                            />
                        </a>

                        <Typography variant="title" gutterBottom className={classes.profileName}>
                            Guilherme Latrova
                        </Typography>
                    </div>

                    <Typography variant="subheading" className={classes.profileTitle}>
                        Full Stack Developer
                    </Typography>
                </div>

                <Divider />
                <List className={classes.list}>
                    <DrawerItem icon={<LabelIcon />} text="My Pokedex" to="/" />
                </List>
            </div>
      </Drawer>        
    );
};

AppDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppDrawer);