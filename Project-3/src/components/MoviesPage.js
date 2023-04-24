import React, { useState } from 'react'
import movies, { movieData } from "../data/movies"


const MoviesPage = () => {

const [searchResult, setSearchResult] = useState("")
const [searchFilterArray, setSearchFilterArray] = useState([])



  const searchOnChange = (event) => {
    const filteredArray = movieData.movies.filter( name => {
      return name.movieTitle.toLowerCase().includes(event.target.value)
    })

    setSearchFilterArray(filteredArray)
  }


  return (

    <>
      <div className='search-bar'>
        <input type="text" onChange={searchOnChange} placeholder="Search..."></input>
      </div>
      <div className='movies-page'>
        {movieData.movies.map(info => {

          return (
            <>
              <div className='movie-card'>
                <div className='movie-picture'>
                  <img src={info.imagepath} className='poster-img' ></img>
                </div>
                <div className='movie-name'>
                  {info.movieTitle}
                </div>
                <div className='movie-genre'>
                  {info.genre}
                </div>
                <div className='movie-year'>
                  {info.releasedDate}
                </div>
                <div className='movie-rating'>
                  {info.rating}
                </div>
                <div className='movie-summary'>
                  {info.summary}
                </div>
              </div>

            </>
          )
        })}
      </div>
    </>
  )
}

export default MoviesPage;



