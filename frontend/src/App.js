import logo from './logo.svg';
import React, {useState} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import {Login} from "./Login";
import { Register } from "./Register";
import Home from './Home';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/Register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
