import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Navbar';
import Routes from './Routes';

function App() {
  
  
  return (
    <div className="App">
      <h1> Welcome to the color factory </h1>
      <BrowserRouter>
        <Navbar/>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
