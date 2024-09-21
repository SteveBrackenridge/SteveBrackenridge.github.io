import { useState } from 'react'
import Menu from './Menu';
import Project1 from './Project1.jsx';
import Section01 from './Project1/Section01.jsx';
import Section02 from './Project1/Section02.jsx';
import Section03 from './Project1/Section03.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home';

function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuClick = (path) => {
    setActiveMenuItem(path);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Wired Attentive Synapse Collection </h1>
          <Menu onItemClick={handleMenuClick} />
        </header>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project1" element={<Project1 />} />
        <Route path="/Project1/Section01" element={<Section01 />} />
        <Route path="/Project1/Section02" element={<Section02 />} />
        <Route path="/Project1/Section03" element={<Section03 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
