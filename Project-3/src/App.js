import { movieData } from './data/movies';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
      <div className='home-page'>
        <HomePage />
      </div>
    );
  }
  
  export default App;
  
  // console.log('data>>', movieData)