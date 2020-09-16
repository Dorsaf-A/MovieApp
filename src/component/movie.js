import React from 'react';
import Rate from './rate';
import {BsFillPlayFill} from 'react-icons/bs'
import '../App.css'

function Movie({movies,nameMovie,x}) {
    return (
        <div className='movieCard'>
            {movies.filter(
          (movi) =>
            movi.moviename.toLowerCase().includes(nameMovie.toLowerCase().trim()) &&
            movi.rating >= x
        ).map((movi)=>
            <div className='movieDetails'><img src={movi.image} alt={movi.moviename}/>
            <div className='detail'><h2>{movi.moviename}</h2>
            <Rate rating={movi.rating}/>
            <p className='sm'>{movi.description}</p>
            <button className="bttn"><BsFillPlayFill/>Watch now</button>
            </div></div>)}
        </div>
    )
}

export default Movie;
