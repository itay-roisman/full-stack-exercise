import React from 'react';
import { getRandomTimestamps } from './api.js';
import './style.css';

export default function App() {
  const timestamp = getRandomTimestamps();

  return (
    <div>
      <h1>Heatmap Exercise</h1>
      <p>{JSON.stringify(timestamp)}</p>
    </div>
  );
}
