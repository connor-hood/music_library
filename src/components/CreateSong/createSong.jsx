import React, {Component} from 'react';
import axios from 'axios';

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            artist: '',
            album: '',
            release_date: ''
         };
         
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Song Name: ${this.state.title} 
        Artist: ${this.state.artist} 
        Album: ${this.state.album}
        Release Date: ${this.state.release_date}`)
        this.createSong();
    }

    componentDidMount(){
         console.log("Hello")
         this.createSong();
     }

    async createSong() {
        let response = await axios.post('http://127.0.0.1:8000/music/', this.state);
        this.setState({
            title: response.data,
            artist: response.data,
            album: response.data,
            release_date: response.data
        });
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Song Title</label>
                    <input type="text" name='title' id='title'onChange={this.handleChange}></input>
                    <br></br>
                    <label>Artist</label>
                    <input type="text" name='artist' id='artist'onChange={this.handleChange}></input>
                    <br></br>
                    <label>Album</label>
                    <input type="text" name='album' id='album' onChange={this.handleChange}></input>
                    <br></br>
                    <label>Release Date</label>
                    <input type="text" name='release_date' id='release_date'onChange={this.handleChange}></input>
                    <br></br>
                    <input type='submit'/>
                </form>
            </div>
         );
    }
}
 
export default SongForm;