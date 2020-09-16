import React from 'react';
import Movie from './movie';
import '../App.css'

function MoviesList({movies,nameMovie,x}) {
    return (
        <span className='list'>
            <Movie movies={movies} nameMovie={nameMovie} x={x}/>
        </span>
    )
}

export default MoviesList
