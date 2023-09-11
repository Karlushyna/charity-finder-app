// src/components/CharityDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CharityDetail() {
  const { id } = useParams();
  const [charity, setCharity] = useState(null);

  useEffect(() => {
    // Fetch detailed information about the selected charity using its ID
    axios
      .get(`https://api.every.org/v1/charities/${id}`, {
        headers: {
          Authorization: 'Bearer pk_live_1f1dd8b6d438e0123aad2c55c66e89a0',
        },
      })
      .then((response) => {
        setCharity(response.data);
      })
      .catch((error) => {
        console.error('Error fetching charity details:', error);
      });
  }, [id]);

  if (!charity) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{charity.name}</h2>
      <p>{charity.description}</p>
      {/* Display other charity details */}
    </div>
  );
}

export default CharityDetail;
