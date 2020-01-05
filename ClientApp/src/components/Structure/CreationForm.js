import React from "react";
import './../../styles/CreationForm.css'
import Grid from "@material-ui/core/Grid";
import {AlignCenter, Navigation, Sidebar} from "react-feather";


export default function CreationForm() {

    return (
        <Grid xs={10} className={"creation-form-root"}>

            <div className={"container"}>
            
                <div className={"row justify-content-center align-items-center container-row-form"}>

                    <div className={"col-4"}>
                        <form className={"form mt-5"} noValidate autoComplete="off">
                        
                            <p className={"lead h3"}> New game </p>

                            <small className="form-text text-muted"> Name </small>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"> <Navigation/> </span>
                                </div>
                                <input type="text" className="form-control" id="name" name="name"/>
                            </div>

                            <small className="form-text text-muted"> Description </small>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"> <AlignCenter/> </span>
                                </div>
                                <input type="text" className="form-control" id="description" name="description"/>
                            </div>

                            <small className="form-text text-muted"> Genre </small>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"> <Sidebar/> </span>
                                </div>
                                <input type="text" className="form-control" id="genre" name="genre"/>
                            </div>

                            <button type="submit" className="btn btn-outline-primary btn-block"> Save</button>

                        </form>

                    </div>
                
                </div>

            </div>

        </Grid>
    )
}
