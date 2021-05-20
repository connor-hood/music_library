import React, {Component} from 'react';
import MusicTable from './MusicTable/musicTable';
import axios from 'axios';

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