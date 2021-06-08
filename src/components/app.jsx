import React, {Component,  } from 'react';
import MusicTable from './MusicTable/musicTable';
import SongForm from './CreateSong/createSong';
import axios from 'axios';
import './app.css';

//TODO: Build search bar, get delete button working
class App extends Component {
    state = { 
        songs: [],
        filtered_songs: []
    }

    handleChange = event => {
        this.setState({filtered_songs: event.target.value}, () => {
            this.globalSearch();
        });
    };

    globalSearch = () => {
        
    }
    
    componentDidMount(){
        console.log("mount")
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
        return response
    }

    //delete song needs ID to be passed in.
    async deleteSong(id){
        let delResponse = await axios.delete(`http://127.0.0.1:8000/music/${this.state.id}/`);
        return delResponse
    }
    
    render() { 
        return ( 
            <div>
                <h1>Select your funky fresh tunes here!</h1>
                <div>
                    <input type="text" placeholder="Search here!" />
                </div>
                <MusicTable songs={this.state.songs}/>
                <h4>Create a new song:</h4>
                <SongForm />
            </div>
         );
    }
}
 
export default App;