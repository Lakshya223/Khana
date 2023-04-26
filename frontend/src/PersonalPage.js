import React, { useContext, useState } from 'react';
import axios from 'axios';

import UserContext from './UserContext';
function PersonalPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const {user} = useContext(UserContext);
  const {type} = useContext(UserContext);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
   // event.preventDefault();
   
  

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      const base64Image = reader.result.replace(/^data:image\/(.*);base64,/, '');
      // console.log(base64Image)
      const fileReq = {
        user:user,
        type: type,
        base64Image: base64Image
      }
      console.log(fileReq)
      axios.post('http://192.168.129.222:5000/api/test',fileReq);

    };
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default PersonalPage;
