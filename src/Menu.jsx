import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const menuItems = [
  { path: "/", label: "Home" },
  { path: "/Project1", label: "Project 1" },
  { path: "/project2", label: "Project 2" },
];

const Menu = ({ onItemClick }) => {
  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} onClick={() => onItemClick(item.path)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
