import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'


function App() {
  return (
      <div className='home-page'>
        <NavBar />
        <HomePage />
      </div>
    );
  }
  
  export default App;
  
  // console.log('data>>', movieData)