import React, { Component } from 'react';
import NavBar from './components/Structure/NavBar';

export default class App extends Component {
    static displayName = App.name;
    
    render() {
        return (
            <div>
                
                <NavBar />
                
            </div>
        );
    }
}
