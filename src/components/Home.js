// src/components/Home.js
import React from 'react';
import Search from './Search';
import CharityList from './CharityList';

function Home() {
  return (
    <div>
      <h1>Charity Finder</h1>
      <Search />
      <CharityList />
    </div>
  );
}

export default Home;
