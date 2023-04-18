import data from '../data/movies'
import { useState } from 'react'

const SearchBar = () => {

  return (
    <>
      <div className='search-bar'>
        <input type="search" id="query" name="q" placeholder="Search..."></input>
        <button>Search</button>
      </div>

    </>

  )
}



export default SearchBar;