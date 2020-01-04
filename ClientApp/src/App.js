import React, {Component} from 'react';
import NavBar from './components/Structure/NavBar';
import LateralMenu from "./components/Structure/LateralMenu";
import OverView from './components/Structure/OverView'
import Grid from "@material-ui/core/Grid";
import VideoGames from "./components/Structure/VideoGames";


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Grid container style={{
                background: "#rgb(244, 246, 248)"
            }}>

                
                <NavBar/>

                <LateralMenu/>

                {/*<OverView/>*/}
                
                <VideoGames />
                
            </Grid>
        );
    }
}
