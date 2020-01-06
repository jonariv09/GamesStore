import React from 'react';
import {Home, Monitor, User} from 'react-feather'
import {makeStyles, createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import '../../styles/LateralMenu.css';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge/Badge";
import Link from "react-router-dom/Link";
import '../../styles/styles.css'


const StyledBadge = withStyles(theme => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);


const themeSpacing = createMuiTheme({
    spacing: 0
});

export default function LateralMenu() {

    const sideList = side => (

        <Grid item xs={2}>


            <div
                className={"lateral-menu"}
            >
                <List className={""}>

                    <Link to={"/overview"} style={{
                        textDecoration: "none",
                        color: "#222831"
                    }}>
                        <ListItem button className={"list-item"}>
                            <ListItemIcon>
                                    <Home className={"icon-list-item"}/>
                            </ListItemIcon>
                            <ListItemText primary={"Overview"} className={"item-text-lateral"}/>
                        </ListItem>
                    </Link>

                    <Link to={"/videogames"} style={{
                        textDecoration: "none",
                        color: "#222831"
                    }}>
                        <ListItem button className={"list-item"}>
                            <ListItemIcon>
                                <Monitor className={"icon-list-item"}/>
                            </ListItemIcon>
                            <ListItemText primary={"Video Games"} className={"item-text-lateral"}/>
                        </ListItem>
                    </Link>

                    {/*<ListItem button className={"list-item"}>*/}
                    {/*    <ListItemIcon>*/}
                    {/*        <a href="">*/}
                    {/*            <User className={"icon-list-item"}/>*/}
                    {/*        </a>*/}
                    {/*    </ListItemIcon>*/}
                    {/*    <ListItemText primary={"Settings"}/>*/}
                    {/*</ListItem>*/}

                    {/*{*/}
                    {/*    [1, 2, 3, 4, 5].map((number, index) => (*/}
                    {/*        <ListItem key={number} button className={"list-item"}>*/}
                    {/*            <ListItemIcon>*/}
                    {/*                <a href="">*/}
                    {/*                    <User className={"icon-list-item"}/>*/}
                    {/*                </a>*/}
                    {/*            </ListItemIcon>*/}
                    {/*            <ListItemText primary={"Settings"}/>*/}
                    {/*        </ListItem>*/}
                    {/*    ))*/}
                    {/*    */}
                    {/*}*/}


                </List>

                <Card className={"presentation-card fixed-bottom"}>
                    <Card>
                        <CardHeader
                            avatar={
                                <StyledBadge
                                    overlap="circle"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    variant="dot"
                                >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                                </StyledBadge>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon/>
                                </IconButton>
                            }
                            title="Jose Agustin"
                            subheader="IntelliOpen's CEO"
                        />
                    </Card>
                </Card>


            </div>

        </Grid>
    );


    return (
        <ThemeProvider>
            {sideList('left')}
        </ThemeProvider>
    )
}
