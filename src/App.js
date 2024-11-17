import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioHeader from './components/PortfolioHeader';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header and Footer are always present */}
        <Header />

        <Routes>
          {/* Define routes for different pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioHeader />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
