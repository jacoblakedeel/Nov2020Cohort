
import React, { Component } from 'react'

class App extends Component {

  constructor(){
    super();

    this.state ={
      count:0
    }
  }
  
  incrementChange = (event) => {
    this.setState({
      count: this.state.count + 1
    })
  }
  
  decrementChange = (event) => {
    this.setState({
      count: this.state.count - 1
    })
  }
  

  render() {
    return (
      <>
        <div>
          <button onClick={this.incrementChange}>increment</button>
          <p>{this.state.count}</p>
          <button onClick={this.decrementChange}>decrement</button>
        </div>
        
      </>
    )
  }
}


export default App;
