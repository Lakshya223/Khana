import React, {useEffect, useState} from "react"

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"


function Home(){
    const {state} = useLocation();
    const name = state.name;
    return(
        <>
        <Navbar name={name} />
      <h2> Welcome {name} !</h2>
      </>
    )
}

export default Home
