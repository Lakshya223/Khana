import React, {useEffect, useState} from "react"
import { useContext } from 'react';

import UserContext from './UserContext';
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"


function Home(){
  
    const { user } = useContext(UserContext);
    const {type} = useContext(UserContext);
   
    return(
        <>
        <Navbar  />
      <h2> Welcome {user}  !</h2>
      </>
    )
}

export default Home
