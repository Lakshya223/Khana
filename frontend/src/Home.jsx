import React, {useEffect, useState} from "react"

import { useLocation } from "react-router-dom";

function Home(){
    const {state} = useLocation();
    const name = state.name;
    return(
        <h2> Welcome {name} ! </h2>
    )
}
export default Home