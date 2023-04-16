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
      <button type="button" onClick={home}>
        Home
      </button>
      <button type="button" onClick={movies}>
        movies
      </button>
    </div>
  );
}







export default NavBar;