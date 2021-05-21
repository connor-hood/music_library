import React, {Component} from 'react';
import axios from 'axios';

class SongForm extends Component {
    state = { 
        title: '',
        artist: '',
        album: '',
        release_date: ''
     }

     componentDidMount(){
         console.log("Hello")
         this.createSong();
     }

    async createSong() {
        let response = await axios.post('http://127.0.0.1:8000/music/', this.state);
        console.log(response)
        this.setState({
            title: response.data,
            artist: response.data,
            album: response.data,
            release_date: response.data
        });
        let newTable = await axios.get('http://127.0.0.1:8000/music/')
        return newTable;
    }

    render() { 
        return ( 
            <div>
                <form>
                    <label>Song Title</label>
                    <input type="text" name='title' id='title'></input>
                    <br></br>
                    <label>Artist</label>
                    <input type="text" name='artist' id='artist'></input>
                    <br></br>
                    <label>Album</label>
                    <input type="text" name='album' id='album' ></input>
                    <br></br>
                    <label>Release Date</label>
                    <input type="text" name='release_date' id='release_date'></input>
                    <br></br>
                    <button onClick={this.createSong}>Add to List</button>
                </form>
            </div>
         );
    }
}
 
export default SongForm;