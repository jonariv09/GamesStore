import React, {Component} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Trash, Edit, Heart, Navigation, AlignCenter, Sidebar} from 'react-feather';
import '../../../styles/InternalComponents/VideoGameCard.css';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import videoGame from "../../../images/mario-striker.jpg";
import Chip from "@material-ui/core/Chip";
import DoneIcon from '@material-ui/icons/Done';

export default class VideoGameCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            game: {
                id: null,
                name: '',
                description: '',
                genre: ''
            }
        };
        
        this.handleDeleteGame = this.handleDeleteGame.bind(this);
        this.handleInputGame = this.handleInputGame.bind(this);
        this.handleEditGame = this.handleEditGame.bind(this);

    }

    componentDidMount() {
        let gameTemp = {
            id: this.props.id,
            name: this.props.name,
            description: this.props.description,
            genre: this.props.genre
        };
        
        this.setState({
            game: {
                id: gameTemp.id,
                name: gameTemp.name,
                description: gameTemp.description,
                genre: gameTemp.genre
            }
        })
    }
    
    handleDeleteGame() {
        let gameTemp = {
            id: this.props.id,
            name: this.props.name,
            description: this.props.description,
            genre: this.props.genre
        };
        
        this.props.handleDeleteGame(gameTemp);
    }
    
    handleEditGame() {
        this.props.handleEditGame(this.state.game);
    }
    
    handleInputGame(event) {
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
            <Card>
                
                
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                     aria-labelledby="exampleModalLabel"
                     aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <form className={"form"} onSubmit={this.handleEditGame}>


                                <input type="number" name={"id"} value={this.state.game.id} hidden/>
                                <p className={"lead h3"}> New game </p>

                                <small className="form-text text-muted"> Name </small>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"> <Navigation/> </span>
                                    </div>
                                    <input type="text" className="form-control" id="name" name="name"
                                           value={this.state.game.name} onChange={this.handleInputGame}/>
                                </div>

                                <small className="form-text text-muted"> Description </small>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"> <AlignCenter/> </span>
                                    </div>
                                    <input type="text" className="form-control" id="description" name="description"
                                           value={this.state.game.description} onChange={this.handleInputGame}/>
                                </div>

                                <small className="form-text text-muted"> Genre </small>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"> <Sidebar/> </span>
                                    </div>
                                    <input type="text" className="form-control" id="genre" name="genre"
                                           value={this.state.game.genre} onChange={this.handleInputGame}/>
                                </div>

                                <button type="submit" className="btn btn-outline-primary btn-block"> Save </button>

                            </form>
                        </div>
                    </div>
                </div>

                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="VideoGame"
                        image={videoGame}
                        title="VideoGame"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1">
                            {this.props.name}
                        </Typography>
                        <Chip label={this.props.genre} deleteIcon={<DoneIcon/>}/>
                        <Typography variant="body2" color="textSecondary">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid container justify={"flex-end"}>
                        <IconButton onClick={this.handleDeleteGame}>
                            <Trash className={"icon-videgame-card"}/>
                        </IconButton>

                        <a data-toggle="modal" data-target="#exampleModal">
                            <IconButton>
                                <Edit className={"icon-videgame-card"}/>
                            </IconButton>
                        </a>

                        <IconButton>
                            <Heart className={"icon-videgame-card"}/>
                        </IconButton>
                    </Grid>

                </CardActions>

            </Card>
        );
    }
}
