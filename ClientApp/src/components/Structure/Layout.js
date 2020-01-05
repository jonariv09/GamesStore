import React, { Component } from "react";
import NavBar from "./NavBar";
import LateralMenu from "./LateralMenu";
import Grid from "@material-ui/core/Grid";
import Route from "react-router-dom/Route";
import VideoGames from "./VideoGames";
import CreationForm from "./CreationForm";
import OverView from "./OverView";


export default class Layout extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Grid  container>

                <NavBar />
                <LateralMenu />
                


                {
                    this.props.children
                }
                
            </Grid>
        )
    }
}