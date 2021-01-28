import React from 'react'

import { makeStyles } from "@material-ui/core/styles"
import {
    Typography,
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
  }));

const MobileBottomNav = () => {

    const classes = useStyles()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = (event) => {
    
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <div>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" id="instagram-icon">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" id="linkedin-icon">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" id="linkedin-icon">
                            <GitHubIcon />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton
                            aria-label="hamburger nav"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MobileBottomNav
