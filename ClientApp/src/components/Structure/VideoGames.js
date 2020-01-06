import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import '../../styles/VideoGames.css'
import VideoGameCard from "./InternalComponents/VideoGameCard";
import Button from "@material-ui/core/Button";
import {Plus} from 'react-feather'
import {Link} from "react-router-dom";
import '../../styles/styles.css'

export default class VideoGames extends Component {
    constructor(props) {
        super(props);

        this.state = {videoGamesList: []};

        fetch('api/ListGames')
            .then(response => response.json())
            .then(game => {
                this.setState({videoGamesList: game})
            })
    }
    
    render() {
        
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
                                    this.state.videoGamesList.map((game, index) => (
                                        <Grid item xs={3} key={index}>
                                            <VideoGameCard name={game.name} description={game.description}
                                                           genre={game.genre}/>
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
}
