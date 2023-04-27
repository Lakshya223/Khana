import React, {useEffect, useRef, useState} from "react"

import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"
import { useContext } from 'react';
import UserContext from './UserContext';
import axios from "axios";
import PersonalPage from "./PersonalPage";


function Inventory(){
  const { user, type, inventoryItems, setInventoryItems } = useContext(UserContext);
  const [items, setItems] = useState({});
  const itemFetchedRef = useRef(false);

  const allItems = {
    apple: 0,
    banana: 0,
    orange: 0,
    // add more items as needed
  };

  useEffect(() => {
    if (itemFetchedRef.current) return;
    itemFetchedRef.current = true;

    axios.get("http://localhost:3001/getItems", { params: { name: user } })
      .then(function (response) {
        const itemsReceived = response.data.items;
        const updatedItems = { ...allItems, ...itemsReceived };
        setInventoryItems(response.data);
        setItems(updatedItems);
      })
      .catch(function (error) {
        console.error("Error fetching items:", error);
      });

  }, []);
  // const items = inventoryItems.items;
  // console.log(inventoryItems);

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
         <PersonalPage />
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
