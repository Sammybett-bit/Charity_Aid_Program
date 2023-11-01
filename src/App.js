import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Project from './components/Project';
import Blog from './components/Blog';
import Donate from './components/Donate';
import Homepage from './components/Homepage';
import Team from './components/Team';
import Login from './components/Login';
import Signin from './components/Signin';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path = 'Project' element = {<Project/>} />
          <Route path = 'Team' element = {<Team/>} />
          <Route path='Blog' element={<Blog/>}/>
          <Route path='login' element = {<Login/>}/>
          <Route path='Signin' element = {<Signin/>}/>
          <Route path = 'Donate' element = {<Donate/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
