import React from 'react';
import '../index.css'

const People = () => {
  const people = [
    { name: 'Aric the Bold', description: 'A noble knight' },
    { name: 'Elara the Wise', description: 'A powerful sorceress' },
    // ... more people
  ];

  return (
    <div>
      <h1>People of Dunya</h1>
      <ul>
        {people.map((person) => (
          <li key={person.name}>
            <h2>{person.name}</h2>
            <p>{person.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default People;