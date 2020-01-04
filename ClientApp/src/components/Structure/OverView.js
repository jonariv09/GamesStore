import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import BannerGame from '../../images/banner-game.svg'
import Button from "@material-ui/core/Button";
import {Navigation} from 'react-feather';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function OverView() {

    const classes = useStyles();

    return (
        <Grid item xs={10} container className={"overview-root"}>

            <Grid container className={"background-overview"}>

                {/* Banner */}
                <Grid container justify={"center"} className={"banner-overview"}>

                    <Grid item xs={"5"} className={"letters-button"}>
                        <div className={"container-letters"}>

                            <span className={"lead"}> HOME </span>
                            <p className={"name-enterprise"}> IntelliOpen </p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quod. </p>

                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                endIcon={<Navigation/>}
                            >
                                Know more
                            </Button>
                        </div>

                    </Grid>

                    <Grid item xs={"7"} className={"main-banner-game"}>

                        <Grid container className={"banner-container"}>
                            <img src={BannerGame} alt="" className={"banner-game"} width={"80%"}/>
                        </Grid>

                    </Grid>

                </Grid>


                {/* Cards */}
                <Grid container justify={"center"}>

                    <Grid item xs={"4"}>

                    </Grid>

                    <Grid item xs={"4"}>

                    </Grid>

                    <Grid item xs={"4"}>

                    </Grid>


                </Grid>

            </Grid>

        </Grid>
    )

}
