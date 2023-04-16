import React, {useEffect, useState} from "react"

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"
import { useContext } from 'react';
import UserContext from './UserContext';


function Recipe(){
  const { user } = useContext(UserContext);
    
    return(
        <>
        <Navbar />
      <h2> {user}'s Recipe!</h2>
      </>
    )
}

export default Recipe
