import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/ContactUs';
import History from './pages/History';
import Newshub from './pages/NewsHub';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spirituality from './pages/Spirituality';
import Vocations from './pages/Vocations';
import Where from './pages/Where';
import Family from './pages/Family';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'; 

function App() {
  return (
    <>

    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/about' element={<About />}/>
      <Route  path='/contact' element={<Contact />}/>
      <Route  path='/history' element={<History />}/>
      <Route  path='/newshub' element={<Newshub />}/>
      <Route  path='/vocations' element={<Vocations />}/>
      <Route  path='/where' element={<Where />}/>
      <Route  path='/family' element={<Family />}/>
      <Route  path='/spirituality' element={<Spirituality />}/>

    </Routes>
    

    
    </>
    
  );
}

export default App;
