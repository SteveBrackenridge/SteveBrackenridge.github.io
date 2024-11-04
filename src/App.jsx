import React from 'react';
import { Routes, Route, } from 'react-router-dom';
import People from './components/People';
import Places from './components/Places';
import Problems from './components/Problems';


function App() {
  return (
    <div className="container">
        <Routes>
          <Route path="/" element={"Here the path begins. The end, if found, may be your own. - Liber Semita"}/>
          <Route path="/people" element={<People />} />
          <Route path="/places" element={<Places />} />
          <Route path="/problems" element={<Problems />} />
        </Routes>
    </div>
  );
}

export default App;