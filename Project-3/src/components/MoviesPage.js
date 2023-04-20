import React, { useState }  from 'react'
import movies, { movieData } from "../data/movies"


const MoviesPage = () => {

  const [searchResult, setSearchResult] =  useState("") 

const searchOnChange = (event) => {
  setSearchResult(event.target.value)
}

  return (

    <>
    <div className='search-bar'>
        <input type="text" onChange={searchOnChange} placeholder="Search..."></input>
    </div>
    <div className='movies-page'>
      <div className='movie-card'>
        <div className='movie-picture'>
            Picture
        </div>
        <div className='movie-info'>
          <div className='movie-name'>
            BATMAN
          </div>
          <div className='movie-year'>
            2001
          </div>
          <div className='movie-rating'>
            9.0
          </div>
        </div>
        <div className='movie-summary'>
            luqman is the best person to go and ask which movie is he best
        </div>
      </div>
    </div>
    </>
  )
}

export default MoviesPage;





// div className='movies-page'>
//         <div className='movie-card'>
//           {movieData.movies.map (info => {

//             return (
//               <>
//                 <div className='movie-title'>
//                   {/* {info.movieTitle} */}
//                 </div>
//                 {/* <div className='movie-genre'> */}
//                   {/* {info.genre} */}
//                 {/* </div> */}
//                 {/* <div className='movie-release'> */}
//                   {/* {info.releasedDate} */}
//                 {/* </div> */}
//                 {/* <div className='movie-rating'> */}
//                   {/* {info.rating} */}
//                 {/* </div> */}
//                 {/* <div className='movie-sumarry'> */}
//                   {/* {info.summary} */}
//                 {/* </div> */}
//               </>
//             )
//           })}