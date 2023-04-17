import React, {useEffect, useState} from "react"

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"
import { useContext } from 'react';
import UserContext from './UserContext';
import Typewriter from 'typewriter-effect';



function Recipe(){
  const { user } = useContext(UserContext);
    return(
        <div className="recipe">
          <Navbar />
        <div className="recipe-body">
        
        <h2>{user}'s Recipe</h2>
        <Typewriter 
          onInit={(typewriter)=>{
            typewriter.typeString(
              "This is the recipe"
              ).start();

          }}
          cursor="_"
          typingDelay={100}
          speed={50}
          />
     
      </div>
      </div>
    )
}

export default Recipe
