import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './Components/Calculator';
import './App.css';
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import Quote from './pages/Quote';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </>
);

Calculator.defalutValue = {};
export default App;
