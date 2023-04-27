import React, { useEffect, useRef, useState } from 'react';

import Navbar from '../components/Navbar';
import { useContext } from 'react';
import UserContext from '../UserContext';
import axios from 'axios';
import PersonalPage from './PersonalPage';
import BusinessPage from './BusinessPage';

function Inventory() {
  const { user, type, setInventoryItems, setThirdPartyItems} = useContext(
    UserContext
  );
  const [items, setItems] = useState({});
  const itemFetchedRef = useRef(false);

  useEffect(() => {
    if (itemFetchedRef.current) return;
    itemFetchedRef.current = true;

    const allItems = {
      tomato: 0,
      potato: 0,
      carrot: 0,
      cucumber : 0,
      lemon:0
      // add more items as needed
    };

    axios
      .get('http://localhost:3001/getItems', { params: { name: user } })
      .then(function (response) {
        const itemsReceived = response.data.items;
        const updatedItems = { ...allItems, ...itemsReceived };
        setInventoryItems(itemsReceived);
        console.log(itemsReceived)
        setItems(updatedItems);
        setThirdPartyItems(updatedItems);
      })
      .catch(function (error) {
        console.error('Error fetching items:', error);
      });
  }, []);

  return (
    <div className='inventoryS'>
      <Navbar />
      <h2>{user}'s Inventory!</h2>
      <br />
      {type === 'business' ? (
        // Render business-specific content here
        <>
        <BusinessPage/>
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
  );
}

export default Inventory;
