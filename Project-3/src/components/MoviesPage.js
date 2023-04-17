import React from 'react'
import movies, { movieData } from "../data/movies"


const MoviesPage = () => {

  // console.log("single movie", movieData.movies[2].movieTitle)
  // console.log("movies data",movieData)


  return (



    <div className='movies-page'>
        <div className='movie-card'>
          {movieData.movies.map (info => {

            return (
              <>
                <div className='movie-title'>
                  {/* {info.movieTitle} */}
                </div>
                {/* <div className='movie-genre'> */}
                  {/* {info.genre} */}
                {/* </div> */}
                {/* <div className='movie-release'> */}
                  {/* {info.releasedDate} */}
                {/* </div> */}
                {/* <div className='movie-rating'> */}
                  {/* {info.rating} */}
                {/* </div> */}
                {/* <div className='movie-sumarry'> */}
                  {/* {info.summary} */}
                {/* </div> */}
              </>
            )
          })}
        </div>
      </div>
  )
}

export default MoviesPage;
