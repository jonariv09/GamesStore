import React, {Component} from "react";
import './../../styles/CreationForm.css';
import Grid from "@material-ui/core/Grid";
import {AlignCenter, Navigation, Sidebar} from "react-feather";


export default class CreationEditForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            game: {
                name: '',
                description: '',
                genre: ''
            }
        };
        
        this.handleSubmitCreate = this.handleSubmitCreate.bind(this);
        this.handleInputTareaChange = this.handleInputTareaChange.bind(this);
    }
    
    componentDidMount() {
        this.setState({
            game: {
                name: this.props.name,
                description: this.props.description,
                genre: this.props.genre
            }
        })
    }


    handleSubmitCreate(event) {
        event.preventDefault();

        fetch('api/CreateGame', {
            method: 'POST',
            body: JSON.stringify(this.state.game),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .catch(err => console.error('Error:', err))
            .then(response => {
                
                this.setState({
                    game: {
                        id: null,
                        name: "",
                        description: "",
                        genre: ""
                    }
                })

            })
    }
    
    handleInputTareaChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState(prevState => ({
            game: {
                ...prevState.game,
                [name]: value
            }
        }));
    }

    render() {

        return (

            <Grid item xs={10} className={"creation-form-root"}>

                <div className={"container"}>

                    <div className={"row justify-content-center align-items-center container-row-form"}>

                        <div className={"col-4"}>
                           

                            <form className={"form mt-5"} onSubmit={this.handleSubmitCreate}>


                                <input type="number" name={"id"} value={this.state.game.id} hidden/>
                                <p className={"lead h3"}> New game </p>

                                <small className="form-text text-muted"> Name </small>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"> <Navigation/> </span>
                                    </div>
                                    <input type="text" className="form-control" id="name" name="name"
                                           value={this.state.game.name}
                                           onChange={this.handleInputTareaChange}/>
                                </div>

                                <small className="form-text text-muted"> Description </small>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"> <AlignCenter/> </span>
                                    </div>
                                    <input type="text" className="form-control" id="description" name="description"
                                           value={this.state.game.description}
                                           onChange={this.handleInputTareaChange}/>
                                </div>

                                <small className="form-text text-muted"> Genre </small>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"> <Sidebar/> </span>
                                    </div>
                                    <input type="text" className="form-control" id="genre" name="genre"
                                           value={this.state.game.genre}
                                           onChange={this.handleInputTareaChange}/>
                                </div>

                                <button type="submit" className="btn btn-outline-primary btn-block"> Save</button>

                            </form>

                        </div>

                    </div>

                </div>

            </Grid>
        )

    }

}
