import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import FoodGallery from './components/FoodGallery';
import Detail from './components/Detail';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Map from './components/Map';
import './css/App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<FoodGallery />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/map" element={<Map />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
