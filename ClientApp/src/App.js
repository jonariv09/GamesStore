import React, {Component} from 'react';
import NavBar from './components/Structure/NavBar';
import LateralMenu from "./components/Structure/LateralMenu";
import OverView from './components/Structure/OverView'
import Grid from "@material-ui/core/Grid";
import VideoGames from "./components/Structure/VideoGames";
import CreationForm from "./components/Structure/CreationForm";


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            Grid
            
            
            {/*<Grid container>*/}
            {/*    */}
            {/*    <NavBar/>*/}
            
            {/*    <LateralMenu/>*/}
            
            {/*    <OverView/>*/}
            {/*    */}
            {/*    <VideoGames />*/}
            {/*    */}
            {/*    <CreationForm />*/}
            {/*</Grid>*/}
        );
    }
}
