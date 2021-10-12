// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
// import MusicTable from './components/MusicTable/MusicTable'


class App extends Component {
  state = {
    songs:[]
  }

  componentDidMount(){
    // axios.get('http://127.0.0.1:8000/music/')
    // .then(response => this.setState ({
    //   songs: response.data
    // }));


    this.getAllSongs();
  }

  async getAllSongs(){
  let response = await axios.get('http://127.0.0.1:8000/music/');
   console.log(response.data)
   this.setState({
      songs: response.data
    });
  }

  renderTableData() {
    return this.state.songs.map((song, index) => {
       const { id, artist, title, album, release_date } = song
       return (
        //  <table>
        
          <tr key={id}>
             <td><button>delete</button> {id}</td>
             <td>{artist}</td>
             <td>{title}</td>
             <td>{album}</td>
             <td>{release_date}</td>

          </tr>
          // </table>
       )
    })
 }


  render () {
    return (
      <div className="App">
        <header> 
        <h1>Music Library</h1>
        </header>


          <tbody>
       <table>
        <tr>

           <th>ID</th>
           <th>Artist</th>
           <th>Title</th>
           <th>Album</th>
           <th>Released</th>
        </tr>
            {/* <tr>{this.renderTableHeader()}</tr> */}
            {/* <MusicTable musicTable={this.state.songs}/> */}

            {this.renderTableData()}
            
        </table>

        
          </tbody>

          <button>Click to Add Song</button>
          <button>Click to Search</button>
          

      </div>
      
      

      
    );  
  }
}


export default App;
