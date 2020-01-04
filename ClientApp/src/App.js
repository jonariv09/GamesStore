import React, {Component} from 'react';
import NavBar from './components/Structure/NavBar';
import LateralMenu from "./components/Structure/LateralMenu";
import OverView from './components/Structure/OverView'
import Grid from "@material-ui/core/Grid";


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Grid container>

                
                <NavBar/>

                <LateralMenu/>

                <OverView/>
            </Grid>
        );
    }
}
