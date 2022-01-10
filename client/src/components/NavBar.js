import React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import productApi from '../api/productApi';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function NavBar() {
    const classes = useStyles();

    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const {
        isLoading,
        error, user
    } = useAuth0();

    // useEffect(() => {

    // }, [])
    function img(user) {
        productApi.addUser(user);
        return <Avatar variant="circular" src={user.picture}></Avatar>
    }
    return (

        <>

            <CssBaseline />
            {/* <AppBar position="relative" style={{ width: "100%" }}>
                <Toolbar>
                    <Typography variant="h6">
                        Todo
                    </Typography>
                    <LoginButton />
                    <LogoutButton />
                    <button onClick={check} >check account</button>
                    {!isLoading && img(user)}
                </Toolbar>
            </AppBar> */}
            <div className={classes.root}>
                {/* <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
                        label={auth ? 'Logout' : 'Login'}
                    />
                
                </FormGroup> */}


                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Todo
                        </Typography>
                        {user == undefined && <LoginButton />}

                        {user !== undefined && <LogoutButton />}
                        {!isLoading && user !== undefined && (
                            <div>


                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    {img(user)}
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
                                    <MenuItem onClick={handleClose}>Option 1</MenuItem>
                                    <MenuItem onClick={handleClose}>Option 2</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}
