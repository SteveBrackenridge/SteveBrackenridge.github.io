import React from "react";
import {  Link } from "react-router-dom";


function Header() {
    return (
        <div>
            <h1>Welcome, Players!</h1>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
          <li>
            <Link to="/places">Places</Link>
          </li>
          <li>
            <Link to="/problems">Problems</Link>
          </li>
        </ul>
        </nav>
        </div>
    )
}

export default Header;