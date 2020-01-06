import React, { Component } from "react";
import NavBar from "./NavBar";
import LateralMenu from "./LateralMenu";
import Grid from "@material-ui/core/Grid";


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