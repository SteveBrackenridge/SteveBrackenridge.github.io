import React from 'react';
import '../index.css'

const Problems = () => {
  const problems = [
    { name: 'Aric the Bold', description: 'A noble knight' },
    { name: 'Elara the Wise', description: 'A powerful sorceress' },
    // ... more problems
  ];

  return (
    <div>
      <h1>Problems facing Dunya</h1>
        <ul>
        {problems.map((problem) => (
          <li key={problem.name}>
            <h2>{problem.name}</h2>
            <p>{problem.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Problems;