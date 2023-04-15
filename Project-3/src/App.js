import { movieData } from './data/movies';
import './App.css';
import HomePage from './components/HomePage';
import SearchBar from './components/SearchBar'

function App() {
  return (
      <div className='home-page'>
        <HomePage />
        <SearchBar />
      </div>
    );
  }
  
  export default App;
  
  // console.log('data>>', movieData)