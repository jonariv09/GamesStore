import React from "react";
import Grid from "@material-ui/core/Grid";
import '../../styles/VideoGames.css'
import VideoGameCard from "./InternalComponents/VideoGameCard";

export default function VideoGames() {

    return (

        <Grid item xs={10} container justify={"center"} className={"videogames-root"}>

            <Grid item xs={11}>

                <Grid container justify={"center"}>
                    <Grid item xs={12}>

                        <Grid container spacing={2} className={"container-videogames"}>

                            {
                                [1, 2, 3, 4, 5].map((number, index) => (
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
