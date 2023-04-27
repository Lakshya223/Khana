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
  let recipe1= "1 cup boiled potato cubes 1 cup steamed purple yam (kand) cubes 3/4 cup curds (dahi) 2 tbsp rajgira flour salt to taste 1 tbsp oil 1 tsp cumin seeds (jeera) 1 tsp green chilli paste 2 tsp sugar 1 tbsp finely chopped coriander (dhania) , optional"
  let recipe2= "For Black Sesame Seed Chutney 1/2 cup black sesame seeds (kala til) 2 tbsp desiccated coconut 1 tbsp coriander (dhania) seeds 2 tsp cumin seeds (jeera) 5 dry red chillies (pandi) , broken into pieces 1 tbsp roughly chopped garlic (lehsun) salt to taste"
  console.log(recipeText)
  useEffect(()=>{
    setRecipeText("1 cup toovar (arhar) dal \n 1/2 tsp turmeric powder (haldi) \n 2 tsp chilli powder 1 pinch of asafoetida (hing) \n 2 tbsp chopped jaggery (gur) \n 4 bayleaf (tejpatta) \n  2 tsp coriander (dhania) seeds powder \n 1 tsp mustard seeds ( rai / sarson) \n 2 tsp crushed garlic (lehsun) salt to taste \n oil for cooking")

  })  ;
  
  return(
        <div className="recipe">
          <Navbar />
        <div className="recipe-body">
        
        <h2>Aamabtvaran recipe </h2> <br/>
        {recipeText}
        <h2>Aloo and Kand Rasawala Shaak </h2> <br/>
        {recipe1}
        <h2>Black Sesame Seed Chutney Recipe</h2> <br/>
        {recipe2}
        

        {/* <Typewriter 
          onInit={(typewriter)=>{
            typewriter.typeString(recipeText).start();

          }}
          cursor="_"
          typingDelay={100}
          speed={50}
          /> */}
     
      </div>
      </div>
    )
}

export default Recipe
