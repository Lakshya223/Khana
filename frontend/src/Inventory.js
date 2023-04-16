import React, {useEffect, useState} from "react"

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"


function Inventory(){
    // const {state} = useLocation();
    // const name = state.name;
    return(
        <>
        <Navbar />
      <h2> Welcome to Inventory!</h2>
      </>
    )
}

export default Inventory;
