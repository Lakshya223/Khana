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
import UserContext from './UserContext';

function App() {
  const [user, setUser] = useState(null);
  const [type,setType] = useState(null);
  
  return (
    
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={{ user, setUser,type,setType }}>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/Register" element={<Register/>}/>
        <Route exact path="/Home/Recipe" element={<Recipe/>}/>
        <Route exact path="/Home/Inventory" element={<Inventory/>}/>
        <Route exact path="/Home/Third-party" element={<Third_party/>}/>
      </Routes>
      </UserContext.Provider>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
