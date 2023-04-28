import React, { useState } from 'react'
import movies, { movieData } from "../data/movies"
import { useParams } from 'react-router-dom';



const MoviesPage = () => {

const { obj } = useParams()
const [searchFilterArray, setSearchFilterArray] = useState([])

console.log("obj", obj)
  /**
   * search on change filters through movies array and retruns the name of the movie title against the keys users are putting in the input 
   * @param {*} event is the key press in the input
   */
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
        {((searchFilterArray.length > 0) ? searchFilterArray : movieData.movies).map(info => {
          return (
            <>
              <div key={info} className='movie-card'>
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



