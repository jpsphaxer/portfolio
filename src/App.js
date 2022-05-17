import './App.css';
import React from 'react';
import Header from './components/Header';
import LinearProgress from '@mui/material/LinearProgress';
import Splash from './components/splash/Splash';
import Work from './components/Work'
import About from './components/About';
import Courses from './components/courses/Courses';
import Projects from './components/projects/Projects';
function App() {
  return (
    <div className="App">
      <Splash/>
      <About/>
      <Work/>
      <Projects/>
      <Courses/>
     
    </div>
  );
}

export default App;
