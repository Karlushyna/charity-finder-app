// src/components/FavoriteCharities.js
import React from 'react';

function FavoriteCharities() {
  // Read favorite charities from local storage
  const favoriteCharities = JSON.parse(localStorage.getItem('favoriteCharities')) || [];

  return (
    <div>
      <h2>Favorite Charities</h2>
      <ul>
        {favoriteCharities.map((charity) => (
          <li key={charity.id}>
            {/* Link to the CharityDetail page with the charity's ID */}
            <a href={`/charity/${charity.id}`}>{charity.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteCharities;
