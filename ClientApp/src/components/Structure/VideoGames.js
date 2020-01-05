import React from "react";
import Grid from "@material-ui/core/Grid";
import '../../styles/VideoGames.css'
import VideoGameCard from "./InternalComponents/VideoGameCard";
import Button from "@material-ui/core/Button";
import {Plus} from 'react-feather'
import NavLink from "react-router-dom/NavLink";
import {Link} from "react-router-dom";
import CreationForm from "./CreationForm";
import Route from "react-router-dom/Route";
import '../../styles/styles.css'

export default function VideoGames() {

    return (

        <Grid item xs={10} container justify={"center"} className={"videogames-root"}>

           

            <Grid item xs={11}>

                <Grid container justify={"center"}>
                    <Grid item xs={12}>

                        <Link to={"/create-videogame"} style={{
                            textDecoration: "none"
                        }}>
                            <Button
                                variant="contained"
                                color={"secondary"}
                                startIcon={<Plus/>}
                            >
                                New game
                            </Button>

                        </Link>

                        <Grid container spacing={2} className={"container-videogames"}>

                            {
                                [1, 2, 3, 4, 5, 6].map((number, index) => (
                                    <Grid item xs={3}>
                                        <VideoGameCard/>
                                    </Grid>
                                ))
                            }

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )

}
