import React from 'react'
import { useNavigate } from "react-router-dom"


const HomePage = () => {

  const navigate = useNavigate();

  const movies = () => {
    navigate("movies")
  }

  const handleClick = (event) => {
    console.log(event);
  }

  return (
  <>
    <div>
      <div className='home-display'> 
        <div className='H-O-M-btn' onClick={movies}>
          HOME OF MOVIES
        </div>
        <div>
        <button onClick={handleClick}>Click me</button>
        </div>
      </div>
    </div> 
  </>
  )
}

export default HomePage
