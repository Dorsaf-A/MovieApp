import React, { useState } from 'react';
import Rate from './rate'
import '../App.css'

function SearchMovie({movies,nameMovie,setNameMovie,x,setX}) {
    return (
        <div className='header'>
            <input value={nameMovie} onChange={(e)=>{setNameMovie(e.target.value)}} style={{width:'70%',height:'30px'}} placeholder='write the name of the movie' /> 
            <Rate rating={movies.rating} setRatingSearch={setX}/>
        </div>
    )
}

export default SearchMovie;
