import React, {useEffect, useState} from "react"

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"
import { useContext } from 'react';
import UserContext from './UserContext';


function Third_party(){
  const { user } = useContext(UserContext);
    return(
        <>
        <Navbar />
      <h2> {user}'s Third Party !</h2>
      </>
    )
}

export default Third_party;
