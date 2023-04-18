import React from 'react'
import { useNavigate } from "react-router-dom"


const HomePage = () => {

  const navigate = useNavigate();

  const movies = () => {
    navigate("movies")
  }

  return (
  <>
    <div>
      <div className='home-display'> 
        <button className='H-O-M-btn' onClick={movies}>
          HOME OF MOVIES
        </button>
      </div>
    </div> 
  </>
  )
}



export default HomePage
