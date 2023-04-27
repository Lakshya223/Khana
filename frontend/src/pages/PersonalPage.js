import React, { useContext, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';

import UserContext from '../UserContext';

function PersonalPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {user} = useContext(UserContext);
  const {type} = useContext(UserContext);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    setIsLoading(true);

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      const base64Image = reader.result.replace(/^data:image\/(.*);base64,/, '');
      const fileReq = {
        user:user,
        type: type,
        base64Image: base64Image
      }
      axios.post('http://10.20.23.246:5000/api/test',fileReq)
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    };
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload</button>
      {isLoading && <CircularProgress />}
    </div>
  );
}

export default PersonalPage;
