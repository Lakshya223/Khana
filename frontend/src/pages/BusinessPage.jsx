import React, { useContext, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import { useNavigate } from "react-router-dom";

import UserContext from '../UserContext';

function BusinessPage() {
  const navigate = useNavigate();  
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useContext(UserContext);
  const {type} = useContext(UserContext);
  const Req = {
    user:user,
    type: type
  
  }

 

  const handleUpload = () => {
    setIsLoading(true);

   
    
     
      
      axios.post('http://172.20.10.4:5000/api/test',Req)
        .then(() => {
          setIsLoading(false);
          navigate("/Home/Inventory") 
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
  
  };

  return (
    <div>
      
      <button onClick={handleUpload}>Update</button>
      {isLoading && <CircularProgress />}
    </div>
  );
}

export default BusinessPage;
