import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import OurVision from './components/OurVision';
import Donate from './components/Donate';
import Homepage from './components/Homepage';
import Team from './components/Team';
import Login from './components/Login';
import Signup from './components/Signup'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path = 'OurVision' element = {<OurVision/>} />
          <Route path = 'Team' element = {<Team/>} />
          <Route path='Donate' element={<Donate/>}/>
          <Route path='login' element = {<Login/>}/>
          <Route path='Signup' element = {<Signup/>}/>
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
