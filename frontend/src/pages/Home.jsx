import React, { useContext } from 'react';
import UserContext from '../UserContext';
import Navbar from '../components/Navbar';

function Home() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <h2>Welcome {user}!</h2>
    </>
  );
}

export default Home;
