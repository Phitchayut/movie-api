import React from 'react'
import './Movies.css'

const Movies = ({movie}) => {
  return (
    <div>
        <h2>{movie.title}</h2>
        <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt="" />
        <div className="info">
        <p>IMDB:<span>{movie.vote_average}</span></p>
        </div>
        
    </div>
  )
}

export default Movies