import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/Project1.css';

const menuItems = [
  { path: "/Project1/Section01", label: "Section01" },
  { path: "/Project1/Section02", label: "Section02" },
  { path: "/Project1/Section03", label: "Section03" },
];

const Project1 = ({ onItemClick }) => {

  const handleMenuClick = (path) => {
    setActiveMenuItem(path);
  };

  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} onClick={() => handleMenuClick(item.path)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Project1;
