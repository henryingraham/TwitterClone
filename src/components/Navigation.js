import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import '../styles.css';

export default function Navigation() {
  return (
    <div>
        <a href="/" className="nav-link">
            <div className='nav-button'>
                <HomeIcon className="nav-icon" />
                Home
            </div>
        </a>
        <a href="/" className="nav-link">
            <div className='nav-button'>
                <HomeIcon className="nav-icon" />
                Explore
            </div>
        </a>
        <a href="/" className="nav-link">
            <div className='nav-button'>
                <HomeIcon className="nav-icon" />
                Notifications
            </div>
        </a>
        <a href="/" className="nav-link">
            <div className='nav-button'>
                <HomeIcon className="nav-icon" />
                Messages
            </div>
        </a>
        <a href="/" className="nav-link">
            <div className='nav-button'>
                <HomeIcon className="nav-icon" />
                Lists
            </div>
        </a>
        <a href="/" className="nav-link">
            <div className='nav-button'>
                <HomeIcon className="nav-icon" />
                Bookmarks
            </div>
        </a>
        <a href="/" className="nav-link">
            <div className='nav-button'>
                <HomeIcon className="nav-icon" />
                Communities
            </div>
        </a>
        <a href="/" className="nav-link">
            <div className='nav-button'>
                <HomeIcon className="nav-icon" />
                Verified
            </div>
        </a>
        <a href="/" className="nav-link">
            <div className='nav-button'>
                <HomeIcon className="nav-icon" />
                Profile
            </div>
        </a>
        <a href="/" className="nav-link">
            <div className='nav-button'>
                <HomeIcon className="nav-icon" />
                More
            </div>
        </a>
    </div>
  )
}
