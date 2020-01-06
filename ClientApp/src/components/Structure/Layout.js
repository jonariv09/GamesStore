import React from "react";
import NavBar from "./NavBar";
import LateralMenu from "./LateralMenu";
import Grid from "@material-ui/core/Grid";


export default function Layout(props) {

    return (
        <Grid container>

            <NavBar/>
            <LateralMenu/>

            {
                props.children
            }

        </Grid>
    )
}