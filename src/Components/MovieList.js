import React from 'react'
import MovieCard from './MovieCard'
import '../App.css'


const MovieList = ({movies , inputSearch}) => {
  return (
    <div className='moviestyle'>

        {
        movies.filter(movie => movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim()) || 
        movie.description.toUpperCase().includes(inputSearch.toUpperCase().trim()  ))
        .map( movie =>
      <MovieCard  movie ={movie} key={movie.id}/>

      
        )}

    </div>
  )
}

export default MovieList