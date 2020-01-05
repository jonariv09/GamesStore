import React, {Component} from 'react';
import OverView from './components/Structure/OverView'
import VideoGames from "./components/Structure/VideoGames";
import CreationForm from "./components/Structure/CreationForm";
import Route from "react-router-dom/Route";
import Layout from "./components/Structure/Layout";
import Grid from "@material-ui/core/Grid";



export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path={"/"} component={OverView}/>
                <Route path={"/overview"} component={OverView}/>
                <Route path={"/videoGames"} component={VideoGames} />
                <Route path={"/create-videogame"} component={CreationForm} />
            </Layout>


        );
    }
}

