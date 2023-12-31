import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Skill from './components/Skill';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
