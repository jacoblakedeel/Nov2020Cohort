import React, { Component } from 'react';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super ();
    this.state ={
      searchResults: ' '
    }
  }

  handleInput = (event) => {
    this.setState({
      searchVal: event.target.value
    })
  }
  


  render () {
    return (
    <>
    <div className="text">
      Superheroes Movies
    </div>
    <input type="text" placeholder="Search Superhero" 
    value={this.searchResults} onChange={this.handleInput}/>
    <Card searchResults={this.state.searchResults}/>
      
    </>
  );
  }
  
}

export default App;
