import './App.css';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesPage from './components/MoviesPage';
import MoviePageInfo from './components/MoviePageInfo';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />}/> 
          
          <Route path='/movies' element={<MoviesPage />}/>
          <Route path='/movies/1' element={<MoviePageInfo />}/>
          
          <Route path='/form' element={<Form />}/>

          </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
