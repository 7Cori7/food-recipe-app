import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Details from './pages/details';
import Favorites from './pages/favorites';
import NotFound from './pages/not-found';

function App() {

  return (
    <>
      <div className='text-gray-600 text-lg'>
        <Navbar />
      </div>
      
      <div className='min-h-screen mx-8 bg-white text-gray-600 text-lg'>
        
        <Routes>

          <Route path='/' element={ <Home /> } />
          <Route path='/favorites' element={ <Favorites /> } />

          <Route path='/recipe-item/:id' element={ <Details /> } />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </div>
    </>
  );
}

export default App
