import {Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import Navigation from './component/Navigation';
import Footer from './component/Footer';


function App() {
  return (
    <>
    <Navigation />
    <Routes>
      
      <Route path='/' element={<Home />}/>

      <Route path='/movies' element={<Movies />}/>

      <Route path='/movies/:id' element={<MovieDetail />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
