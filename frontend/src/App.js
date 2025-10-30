import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make GET request to backend
    axios.get('https://my-postgres-app.cfapps.us10-001.hana.ondemand.com/api/hello')
      .then(response => {
        // Set the response message
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching from backend:', error);
        setMessage('Failed to fetch backend data.');
      });
  }, []);

  return (
    <div>
      <h1>Frontend App</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
