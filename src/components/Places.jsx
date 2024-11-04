import React from 'react';
import '../index.css'

const Places = () => {
  const places = [
    { name: 'Aric the Bold', description: 'A noble knight' },
    { name: 'Elara the Wise', description: 'A powerful sorceress' },
    // ... more places
  ];

  return (
    <div>
      <h1>Places of Dunya</h1>
      <ul>
        {places.map((place) => (
          <li key={place.name}>
            <h2>{place.name}</h2>
            <p>{place.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Places;