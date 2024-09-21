import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/Home.css'

function Home() {
    return (
        <div className='home-container'>
            <div className='home'>
                <h2 className='home-header'>Welcome All and One-Above-All</h2>
                <p className='paragraph'>Enter here if you dare, for within these confines your answers lay. Ensnared though, remain your questions.</p>
            </div>
        </div>
    )
}

export default Home;