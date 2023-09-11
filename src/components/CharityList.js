import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CharityList() {
  const [charities, setCharities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch charities from the API and handle errors
    axios
      .get('https://api.every.org/v1/charities', {
        headers: {
          Authorization: 'Bearer pk_live_1f1dd8b6d438e0123aad2c55c66e89a0', // Replace with your actual API key
        },
        params: {
          // Add any query parameters for searching/filtering charities
        },
      })
      .then((response) => {
        setCharities(response.data);
      })
      .catch((error) => {
        setError(error);
        console.error('Error fetching charities:', error);

        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      });
  }, []);

  if (error) {
    return (
      <div>
        <p>Error fetching charities:</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div>
      <h2>Charities</h2>
      <ul>
        {charities.map((charity) => (
          <li key={charity.id}>
            <Link to={`/charity/${charity.id}`}>{charity.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CharityList;
