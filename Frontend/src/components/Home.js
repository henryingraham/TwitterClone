import React from 'react';
import Navigation from './Navigation';
import Explore from './Explore';
import '../styles.css';
import SearchIcon from '@mui/icons-material/Search';


export default function Home() {
  return (
    <div className='home-page'>
      <div className='nav-column'>
        <Navigation />
      </div>
      <div className='content'>
        <div className='explore-column'>
            <Explore />
        </div>
        <div className='search-column'>
            <div className="searchBar" style={{ marginTop: '7px'}}>
                <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" />
                <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                    <SearchIcon />
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}
