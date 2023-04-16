import logo from './logo.svg';
import React, {useState} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import {Login} from "./Login";
import { Register } from "./Register";
import  Inventory from "./Inventory";
import  Third_party  from "./Third-party";
import Home from './Home';
import Recipe from './Recipe';
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/Register" element={<Register/>}/>
        <Route exact path="/Home/Recipe" element={<Recipe/>}/>
        <Route exact path="/Home/Inventory" element={<Inventory/>}/>
        <Route exact path="/Home/Third-party" element={<Third_party/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
