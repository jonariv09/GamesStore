import React, { Component } from 'react';
import NavBar from './components/Structure/NavBar';
import LateralMenu from "./components/Structure/LateralMenu";


export default class App extends Component {
    static displayName = App.name;
    
    render() {
        return (
            <div style={{
                height: "1500px"
            }}>
                
                <NavBar />

                <LateralMenu />
            </div>
        );
    }
}
