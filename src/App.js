import React from 'react';
import Jumbo from './views/Jumbotron';
import AboutMe from './views/AboutMe';
import { Router } from '@reach/router';
import './App.css';

function App() {
  return (
    <div className='App'>
    <Jumbo />
    <Router>
    <AboutMe path='/home' />
    </Router>
    </div>
  );
}

export default App;
