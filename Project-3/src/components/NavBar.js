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
  
  const form = () => {
    navigate("form")
  }


  return (
    <div className='nav-bar'>
      <div className='home-btn' onClick={home}>
        Home
      </div>
      <div className='movies-btn' onClick={movies}>
        Movies
      </div>
      <div className='register-btn' onClick={form}>
        Sign In
      </div>
    </div>
  );
}







export default NavBar;