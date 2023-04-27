import React, {useEffect, useState, useRef} from "react";
import Navbar from "../components/Navbar";
import { useContext } from 'react';
import UserContext from '../UserContext';

function ThirdParty() {
  const { thirdPartyItems} = useContext(UserContext);
  const [itemsToOrder, setItemsToOrder] = useState([]);
  const itemFetchedRef = useRef(false);

  useEffect(() => {
    if (itemFetchedRef.current) return;
    itemFetchedRef.current = true;

    const threshold = 5;
    const itemsToOrder = [];
    
    for (const [itemName, itemQuantity] of Object.entries(thirdPartyItems)) {
      const quantityNeeded = threshold - itemQuantity;
      if (quantityNeeded > 0) {
        itemsToOrder.push({
          name: itemName,
          availableQuantity: itemQuantity,
          quantityToOrder: quantityNeeded,
        });
      }
    }
  
    setItemsToOrder(itemsToOrder);
  }, [thirdPartyItems]);

  return (
    <div className="third-party">
      <Navbar />
      <h2>Items that need to be ordered!</h2>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Available Quantity</th>
            <th>Quantity to Order</th>
          </tr>
        </thead>
        <tbody>
          {itemsToOrder.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.availableQuantity}</td>
              <td>{item.quantityToOrder}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button style={{alignItems:"center"}}onClick={()=>{alert("order sent successfully")}}>Send order</button>
    </div>
  );
}

export default ThirdParty;
