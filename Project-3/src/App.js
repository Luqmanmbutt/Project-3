import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'


function App() {
  return (
    
      <div className='nav-bar'>
        <NavBar />
        <div className='home-page'>
        <HomePage />
        </div>
      </div>
   
    );
  }
  
  export default App;
  
  // console.log('data>>', movieData)