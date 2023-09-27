import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <Header/>
      <About/>
      <Service/>
      <Skill/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
