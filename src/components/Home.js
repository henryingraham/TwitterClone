import React from 'react';
import Navigation from './Navigation';
import '../styles.css';

export default function Home() {
  return (
    <div className='home-page'>
      <div className='nav-column'>
        <h1>Nav</h1>
        <Navigation />
      </div>
      <div className='content'>
        <div className='explore-column'><h1>Explore</h1></div>
        <div className='search-column'><h1>Search</h1></div>
    </div>
    </div>
  )
}
