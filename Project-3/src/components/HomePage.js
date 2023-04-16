import React from 'react'
import { useNavigate } from "react-router-dom"


const HomePage = () => {

  const navigate = useNavigate();

  const movies = () => {
    navigate("movies")
  }

  return (
  <>

    <div className='home-page'> 
      <button type="button" onClick={movies}>
        HOME OF MOVIES
      </button>
    </div>
  </>
  )
}



export default HomePage
