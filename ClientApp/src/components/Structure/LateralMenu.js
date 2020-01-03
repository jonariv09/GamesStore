import React from 'react';
import {Home, Monitor, User} from 'react-feather'
import {makeStyles, createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
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


const theme = createMuiTheme({
    typography: {
        fontSize: 13
    }
});

const themeSpacing = createMuiTheme({
    spacing: 0
});

export default function LateralMenu() {
    
    const sideList = side => (

        <div
            className={"lateral-menu"}
            role="presentation"
        >
            <List className={""}>

                <ListItem button className={"list-item"}>
                    <ListItemIcon>
                        <a href="">
                            <Home className={"icon-list-item"}/>
                        </a>
                    </ListItemIcon>
                    <ListItemText primary={"Overview"}/>
                </ListItem>

                <ListItem button className={"list-item"}>
                    <ListItemIcon>
                        <a href="">
                            <Monitor className={"icon-list-item"}/>
                        </a>
                    </ListItemIcon>
                    <ListItemText primary={"Video Games"}/>
                </ListItem>

                <ListItem button className={"list-item"}>
                    <ListItemIcon>
                        <a href="">
                            <User className={"icon-list-item"}/>
                        </a>
                    </ListItemIcon>
                    <ListItemText primary={"Settings"}/>
                </ListItem>
                
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
                            <Avatar aria-label="recipe" >
                                R
                            </Avatar>
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

    );


    return (
        <div>

            <ThemeProvider theme={theme}>
                {sideList('left')}
            </ThemeProvider>

        </div>
    )
}
