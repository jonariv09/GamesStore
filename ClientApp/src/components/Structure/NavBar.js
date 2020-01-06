import React, {Component} from 'react';
import {Search, Power, PlusCircle} from 'react-feather';
import {makeStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import '../../styles/NavBar.css'
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        color: '#550a46',
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));


export default function NavBar() {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null)
    };

    return (
        <Grid item xs={12}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-navbar fixed-top">


                    <Paper component="form" className={classes.root}>
                        <InputBase
                            className={classes.input}
                            placeholder="Search Video Games"
                            inputProps={{'aria-label': 'search videogames'}}
                        />
                        <Divider className={classes.divider} orientation="vertical"/>
                        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                            <Search className={"icon-search"}/>
                        </IconButton>
                    </Paper>
                
                
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" aria-haspopup="true" onClick={handleClick}>
                                <Power/>
                            </a>
                            
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}> Entrar </MenuItem>
                                <MenuItem onClick={handleClose}> Nueva cuenta </MenuItem>
                            </Menu>
                        </li>

                    </ul>

                </div>
            </nav>
        </Grid>
    )
}

