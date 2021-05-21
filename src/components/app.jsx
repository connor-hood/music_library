import React, {Component} from 'react';
import MusicTable from './MusicTable/musicTable';
import axios from 'axios';
import './app.css';

//TODO: Build search bar, song form, get delete button working
class App extends Component {
    state = { 
        songs: []
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

    deleteSong(songId){
        if(window.confirm('Are you sure?')){
            let response = axios.get('http://127.0.0.1:8000/music' + songId)
            this.setState({
                songId: response.data
            });
        }
    }
    
    render() { 
        return ( 
            <div>
            <h1>Select your funky fresh tunes here!</h1>
            <MusicTable songs={this.state.songs}/>
            </div>
         );
    }
}
 
export default App;