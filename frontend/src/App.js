import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './UserContext';
import './App.css';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import Inventory from './pages/Inventory';
import ThirdParty from './pages/Third-party';
import Home from './pages/Home';
import Recipe from './pages/Recipe';

function App() {
  const [user, setUser] = useState(null);
  const [type, setType] = useState(null);
  const [recipeText, setRecipeText] = useState(null);
  const [inventoryItems, setInventoryItems] = useState([]);
  const [thirdPartyItems, setThirdPartyItems] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{
            user,
            setUser,
            type,
            setType,
            recipeText,
            setRecipeText,
            inventoryItems,
            setInventoryItems,
            thirdPartyItems,
            setThirdPartyItems,
          }}
        >
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/Home/Recipe" element={<Recipe />} />
            <Route exact path="/Home/Inventory" element={<Inventory />} />
            <Route exact path="/Home/Third-party" element={<ThirdParty />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
