import React from "react";

// const movies = [
//     'The Witch',
//     'The Lighthouse',
//     'Parasite',
//     "The Dead Don't Die",
//     'It Follows',
//     'The Fifth Element',
//     'John Carpenters Halloween',
//     'Drive'
// ];

class MovieList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            movies: [
                'The Witch',
                'The Lighthouse',
                'Parasite',
                "The Dead Don't Die",
                'It Follows',
                'The Fifth Element',
                'John Carpenters Halloween',
                'Drive'
                ]            
        };
    }

    render(){

        return(
            <ul>
                {this.state.movies.map((movie, i) => <li onClick={()=>{this._handleClick(i)}}>{movie}</li>)}
            </ul>

        );
    }

    _handleClick = (index)=>{
        console.log("clicky clicky");
        console.log(index);
        const newMovies = [...this.state.movies];
        newMovies[index] += "!";
        this.setState({
            movies: newMovies
        });
        
    }
    
    _handleMouseOver=(event)=>{
        console.log("thingy has been moused over");
        console.log(event.target);
    }
}

export default MovieList;