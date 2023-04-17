import React, {useEffect, useState} from "react"

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"
import { useContext } from 'react';
import UserContext from './UserContext';


function Inventory(){
  const { user } = useContext(UserContext);
  const {type} = useContext(UserContext);
    return(
        <>
        <Navbar />
      <h2> {user}'s Inventory !</h2>
      {type === 'business' ? (
        // Render business-specific content here
        <p>This is the business inventory page.</p>
      ) : (
        // Render personal-specific content here
        <p>This is the personal inventory page.</p>
      )}
      </>
    )
}

export default Inventory;
