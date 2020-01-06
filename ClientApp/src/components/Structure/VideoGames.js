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
        
        this.handleDeleteGame = this.handleDeleteGame.bind(this);
        this.handleEditGame = this.handleEditGame.bind(this)
        this.loadGames = this.loadGames.bind(this);
        
        this.loadGames();
    }

    loadGames() {
        fetch('api/ListGames')
            .then(response => response.json())
            .then(game => {
                this.setState({videoGamesList: game})
            })
    }
    
    handleDeleteGame(game) {
        fetch('api/DeleteGame', {
            method: 'POST',
            body: JSON.stringify(game.id),
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            }
            
        }).then(res => res.json())
            .catch(error => console.error(error))
            .then(res => {
                
                this.loadGames();
            })
    }
    
    handleEditGame(game) {
        
        fetch('api/EditGame', {
            method: 'POST',
            body: JSON.stringify(game),
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json'
            }

        }).then(res => res.json())
            .catch(error => console.error(error))
            .then(res => {
                this.loadGames()
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
                                            <VideoGameCard id={game.id} name={game.name} description={game.description}
                                                           genre={game.genre}
                                                           handleDeleteGame={this.handleDeleteGame}
                                                           handleEditGame={this.handleEditGame}
                                            />
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
