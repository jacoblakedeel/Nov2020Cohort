import React, { Component } from 'react'

class Card extends Component {
    constructor() {
        super ();

        this.state ={
            movies: []
        }
    }

    componentDidMount = async() =>{
        let url = "http://www.omdbapi.com/?s=superman&apikey=d9b34ab1"

        let response = await fetch(url);

        let data = await response.json();

        this.setState({
            movies: data.Search
        }, () => {
            console.log(this.state.movies);
        }
        )
    }   




    render() {

        const {movies, searchResults} = this.state;

        let movieList = movies.map((movie, index) =>{
            return <li className="text" key={index}>
            <h4>{movie.Title} ({movie.Year})</h4>
            <img src={movie.Poster} alt=""/>
        </li>
        })


        return (
        <> 
            <ul>
                {movieList}
            </ul>
            
        </>
        )
    }
}

export default Card
