import React, {useEffect, useState} from "react"

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"
import { useContext } from 'react';
import UserContext from './UserContext';
import Typewriter from 'typewriter-effect';
import axios from "axios";



function Recipe(){
  const { user } = useContext(UserContext);
  const {recipeText} = useContext(UserContext);
  const {setRecipeText}=useContext(UserContext);

  useEffect(()=>{
      axios.get("http://localhost:3002/getRecipe").then(function(response){
        setRecipeText(response.data)
      });
 
  })  ;
  
  return(
        <div className="recipe">
          <Navbar />
        <div className="recipe-body">
        
        <h2>{user}'s Recipe</h2>
      
        <Typewriter 
          onInit={(typewriter)=>{
            typewriter.typeString(recipeText).start();

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
