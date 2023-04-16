import React from 'react'
import { useNavigate } from "react-router-dom"



const NavBar = () => {

  const home = () => {
    let navigate = useNavigate();

    const handleClick = () => {
      Navigate("/")
    }
  }
  return (
    <div className='nav-bar'>
      <button type="button" onClick={handleClick}>
        Home
      </button>
      <button>
        movies
      </button>
    </div>
  );
}







export default NavBar;