import React, { Component } from 'react'

class Sample1 extends Component {

    constructor(props) {
        super();

        this.history = props.history
    }

    componentDidMount(){
        
    }

    handleClick = () => {
        console.log("Statement");
        this.history.push("/")
    }
    


    render() {
        return (
        <>
            <h1 className="text">Sample 1</h1>

            <button onClick={this.handleClick}>Clique</button>
        </>
        )
    }
}

export default Sample1;
