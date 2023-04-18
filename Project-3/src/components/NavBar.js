import React from 'react'
import { useNavigate } from "react-router-dom"



const NavBar = () => {

  const navigate = useNavigate();

  const home = () => {
    navigate("/")
  }

  const movies = () => {
    navigate("movies")
  }
  


  return (
    <div className='nav-bar'>
      <div className='home-btn' onClick={home}>
        Home
      </div>
      <div className='movies-btn' onClick={movies}>
        Movies
      </div>
    </div>
  );
}







export default NavBar;