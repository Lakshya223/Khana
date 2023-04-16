import React, {useEffect, useState} from "react"

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"


function Recipe(){
    // const {state} = useLocation();
    // const name = state.name;
    return(
        <>
        <Navbar />
      <h2> Welcome to Recipe!</h2>
      </>
    )
}

export default Recipe
