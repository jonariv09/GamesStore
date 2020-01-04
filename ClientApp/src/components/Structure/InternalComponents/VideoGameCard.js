import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Trash, Edit, Heart} from 'react-feather'

import '../../../styles/InternalComponents/VideoGameCard.css'
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import videoGame from "./../../../images/mario-striker.jpg"

const useStyles = makeStyles({
    card: {
        width: 250,
    },
});

export default function VideoGameCard() {
    const classes = useStyles();

    function handleDeleteVideoGame() {
        console.log("to delete")
        
    }
    
    function handleEditVideoGame() {
        console.log('to edit')
    }

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="VideoGame"
                    height="140"
                    image="./../../../images/mario-striker.jpg"
                    title="VideoGame"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container justify={"flex-end"}>
                    <IconButton onClick={handleDeleteVideoGame}>
                        <Trash className={"icon-videgame-card"}/>
                    </IconButton>
                    <IconButton onClick={handleEditVideoGame}>
                        <Edit className={"icon-videgame-card"}/>
                    </IconButton>

                    <IconButton onClick={handleEditVideoGame}>
                        <Heart className={"icon-videgame-card"}/>
                    </IconButton>
                </Grid>

            </CardActions>
        </Card>
    );
}
