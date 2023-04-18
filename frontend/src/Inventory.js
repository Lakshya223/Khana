import React, {useEffect, useRef, useState} from "react"

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"
import { useContext } from 'react';
import UserContext from './UserContext';
import axios from "axios";


function Inventory(){
  const { user } = useContext(UserContext);
  const {type} = useContext(UserContext);
  const {inventoryItems} = useContext(UserContext);
  const { setInventoryItems} = useContext(UserContext);
  const[item,setItem] = useState('');
  const[items,setItems] = useState('');
  const itemFetchedRef = useRef(false)
  

  useEffect(()=>{
    if (itemFetchedRef.current) return;
      itemFetchedRef.current = true;
    axios.get("http://localhost:3001/getItems",{params : {name : user}}).then(function(response){
      setInventoryItems(response.data)
      setItems(inventoryItems.items);
      
  
    });
  
  // const items = inventoryItems.items;
  // console.log(inventoryItems);

})  ;
    return(
        <div className="inventoryS">
        <Navbar />
      <h2> {user}'s Inventory !</h2><br/>
      {type === 'business' ? (
        // Render business-specific content here
        <>
         
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(items).map((item, index) => (
                <tr key={index}>
                  <td>{item}</td>
                  <td>{items[item]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        // Render personal-specific content here
        <>
         
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(items).map((item, index) => (
                <tr key={index}>
                  <td>{item}</td>
                  <td>{items[item]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      </div>
    )
}

export default Inventory;
