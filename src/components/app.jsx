import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {
    state = { 
        songs: []
     }
    
    componentDidMount(){
        this.getAllSongs();
    }

    async getAllSongs(){
        let response = await axios.get('http://127.0.0.1:8000/music/');
        this.setState({
            songs: response.data
        });
    }
    
    render() { 
        return ( 
            <div>
            <h1>Select your funky fresh tunes here!</h1>
            <button type="submit" onClick={this.getAllSongs()}>Display Songs</button>
            </div>
         );
    }
}
 
export default App;