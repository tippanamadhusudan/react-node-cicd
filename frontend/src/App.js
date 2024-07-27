import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [userName, setUserName] = useState('')

  useEffect(() => {
    getNames();
  }, [])

  const getNames = async () => {
    // Making a call to the api we created
    const response = await axios.get('/names');
    console.log(response);
    setUserName(response.data)
  }

  return (
    <>
    <h1>My Website</h1>
    <h3>My name is {userName}</h3>
    </>
  );
}

export default App;
