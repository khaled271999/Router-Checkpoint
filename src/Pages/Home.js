import React, { useState } from 'react'
import FilterMovie from '../Components/FilterMovie'
import MovieList from '../Components/MovieList'
import AddMovie from '../Components/AddMovie'
import { moviesData } from '../Components/MovieData'

const Home = () => {

  const [movies , setMovies] =useState(moviesData)
  const [inputSearch , setInputSearch] = useState("")


  const add = (newMovie) => {
    setMovies([...movies,newMovie])}
  return (
    <div>
    <FilterMovie inputSearch = {inputSearch} setInputSearch ={setInputSearch}/>
    <MovieList movies={movies} inputSearch ={inputSearch} />
    <AddMovie add={add}/>   
    </div>
  )
}

export default Home