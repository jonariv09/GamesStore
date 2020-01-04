import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";


export default class OverView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid item xs={10} container className={"overview-root"}>
                
                {/*Banner*/}
                <Grid container justify={"center"} className={"banner-overview"}>
                    
                    <Grid item xs={"6"} alignItems={"center"} justify={"center"}>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, sed. </p>
                    </Grid>

                    <Grid item xs={"6"}>

                    </Grid>
                    
                </Grid>
                

                {/* Cards */}
                <Grid container justify={"center"} >

                    <Grid item xs={"4"}>

                    </Grid>

                    <Grid item xs={"4"}>

                    </Grid>

                    <Grid item xs={"4"}>

                    </Grid>


                </Grid>
                
                
            </Grid>
        )
    }

}
