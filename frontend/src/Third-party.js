import React, {useEffect, useState} from "react"

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"


function Third_party(){
    // const {state} = useLocation();
    // const name = state.name;
    return(
        <>
        <Navbar />
      <h2> Welcome to Third party!</h2>
      </>
    )
}

export default Third_party;
