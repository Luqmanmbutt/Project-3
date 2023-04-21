import React, { useState } from 'react'
import movies, { movieData } from "../data/movies"


const MoviesPage = () => {

  const [searchResult, setSearchResult] = useState("")

  const searchOnChange = (event) => {
    setSearchResult(event.target.value)
    console.log("searchResult", searchResult)
  }

  return (

    <>
      <div className='search-bar'>
        <input type="text" onChange={searchOnChange} placeholder="Search..."></input>
      </div>
      <div className='movies-page'>
        <div className='movie-card'>
          {movieData.movies.map(info => {

            return (
              <>
                <div className='movie-picture'>
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
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MoviesPage;



