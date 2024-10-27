import React from 'react';
import { getRandomTimestamps } from './api.js';
import './style.css';

export default function App() {
  const timestamp = getRandomTimestamps();

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{JSON.stringify(timestamp)}</p>
    </div>
  );
}
