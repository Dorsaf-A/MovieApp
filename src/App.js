import React, { useState } from 'react';
import './App.css';
import MoviesList from './component/moviesList';
import SearchMovie from './component/searchMovie';
import AddMovie from './component/addMovie'

function App() {
  const [movies,setMovies]=useState([
    {id:Math.random,moviename:"RED",rating:3,description:"Red, est un film américain de Robert Schwentke, sorti en 2010. C'est l'adaptation de la minisérie de comics Red écrite par Warren Ellis, dessinée par Cully Hamner et éditée par Wildstorm dès 2003."
    ,image:'http://3.bp.blogspot.com/-fempDuR-C88/TdCddx6FLgI/AAAAAAAAHvU/UPEqhLsyHpw/s1600/Red%2B%2528Official%2BMovie%2BPoster%2529.jpeg'},
    {id:Math.random,moviename:"Black widow",rating:4,description:"Black Widow ou Veuve Noire au Québec est un film de super-héros et d’espionnage américain réalisé par Cate Shortland, dont la sortie est prévue en 2020."
    ,image:'http://fr.web.img6.acsta.net/pictures/20/03/09/14/46/0710391.jpg'},
    {id:Math.random,moviename:"Blood shot",rating:5,description:"Bloodshot est un film américain réalisé par David S. F. “Dave” Wilson, sorti en 2020. Il s'agit d'une adaptation cinématographique des comics Bloodshot publiés par Valiant Comics."
    ,image:'https://upload.wikimedia.org/wikipedia/en/4/45/Bloodshot_-_official_film_poster.jpeg'},
    {id:Math.random,moviename:"Mulan",rating:2,description:"Mulan est un film américain réalisé par Niki Caro, sorti en 2020. Il s'agit d'un remake en prises de vues réelles du film d'animation Mulan des studios Disney sorti en 1998, lui-même inspiré du personnage légendaire chinois, Hua Mulan."
    ,image:'https://i1.wp.com/teaser-trailer.com/wp-content/uploads/Mulan-movie-poster.jpg?resize=405%2C600&ssl=1'},
    {id:Math.random,moviename:"Red sparow",rating:2,description:"Red Sparrow, ou Le Moineau rouge au Québec, est un film américain réalisé par Francis Lawrence, sorti en 2018."
    ,image:'https://image.tmdb.org/t/p/original/k5PtNavFvGgPQNxEiFhitjcNtxa.jpg'}
  ]);
  const [nameMovie,setNameMovie]=useState('')
    const [x,setX]=useState(1)

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="App">
      <h1>Best movies</h1>
    <SearchMovie movies={movies} nameMovie={nameMovie} setNameMovie={setNameMovie} x={x} setX={setX} />
    <MoviesList movies={movies} x={x} nameMovie={nameMovie}/>
    <AddMovie addNewMovie={addNewMovie}/>
    </div>
  );
}

export default App;
