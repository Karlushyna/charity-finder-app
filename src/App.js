// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CharityDetail from './components/CharityDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charity/:id" element={<CharityDetail />} />
        {/* Add a 404 route or redirect here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
