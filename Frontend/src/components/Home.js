import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Explore from './Explore';
import '../styles.css';
import SearchIcon from '@mui/icons-material/Search';
import { useAuth } from '../context/AuthContext';


export default function Home() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate();
  
  async function handleLogout() {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      setError('Failed to log out');
    }
  }

  return (
    <div className='home-page'>
      hi
      {/* <div className='nav-column'>
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
      </div> */}
    </div>
  )
}
