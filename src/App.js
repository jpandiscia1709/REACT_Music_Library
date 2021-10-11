// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';



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



  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Music Library</h1>
          <p>
            Table of songs here
          </p>
          <h3>form to add songs</h3>
        </header>
      </div>
    );  
  }
}


export default App;
