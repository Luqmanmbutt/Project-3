import React from 'react'
import movies, { movieData } from "../data/movies"


const MoviesPage = () => {

  // console.log("single movie", movieData.movies[2].movieTitle)
  // console.log("movies data",movieData)

  return (


    
    <div className='movies-page'>
      <div className='card-container'>
        <div className='movie-card'>
          
          {movieData.movies.map(info =>{
            return (
              <>
              <p
              key={info.movieData}>
                {info.movieData}
              </p>
              </>
            )
          })}
        </div>
        <div className='movie-card'>
          hello 2
        </div>
        <div className='movie-card'>
          hello 3
        </div>
        <div className='movie-card'>
          hello 4
        </div>
        <div className='movie-card'>
          hello 5
        </div>
        <div className='movie-card'>
          hello 6
        </div>
      </div>
    </div>
  )
}

export default MoviesPage;
