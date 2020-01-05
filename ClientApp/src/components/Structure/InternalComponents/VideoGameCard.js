import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Trash, Edit, Heart} from 'react-feather';

import '../../../styles/InternalComponents/VideoGameCard.css';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import videoGame from "../../../images/mario-striker.jpg";

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
                    image={videoGame}
                    title="VideoGame"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Mario Striker
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, repudiandae.
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
