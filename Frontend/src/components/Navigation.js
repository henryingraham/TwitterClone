import React from 'react'
import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useAuth } from '../context/AuthContext';

import profile from "./profile.png";
import '../styles.css';

export default function Navigation() {
    const data = [1, 2, 3, 4, 5];
    const post = {
      "profileImg": "profile.png",
      "name": "Henry Ingraham",
      "user": "funguy123",
      "date": "June 12",
      "payload": "My favorite player is Lebron James",
      "media": "src/components/lebron.jpg"
    };

    const {currentUser, logout} = useAuth()
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const [error, setError] = useState('');
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
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
        <div>
            <div style={{ height: '50px', width: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <TwitterIcon sx={{ height: '35px', width: '35px'}} />
            </div>
            <div>
                <a href="/" className="nav-link">
                    <div className='nav-button'>
                        <HomeIcon className="nav-icon" />
                        Home
                    </div>
                </a>
                <a href="/" className="nav-link">
                    <div className='nav-button'>
                        <SearchIcon className="nav-icon" />
                        Explore
                    </div>
                </a>
                <a href="/" className="nav-link">
                    <div className='nav-button'>
                        <NotificationsNoneOutlinedIcon className="nav-icon" />
                        Notifications
                    </div>
                </a>
                <a href="/" className="nav-link">
                    <div className='nav-button'>
                        <MailOutlineIcon className="nav-icon" />
                        Messages
                    </div>
                </a>
                <a href="/" className="nav-link">
                    <div className='nav-button'>
                        <ListAltIcon className="nav-icon" />
                        Lists
                    </div>
                </a>
                <a href="/" className="nav-link">
                    <div className='nav-button'>
                        <BookmarkBorderIcon className="nav-icon" />
                        Bookmarks
                    </div>
                </a>
                <a href="/" className="nav-link">
                    <div className='nav-button'>
                        <PeopleOutlineIcon className="nav-icon" />
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
                        <PersonIcon className="nav-icon" />
                        Profile
                    </div>
                </a>
                <a href="/" className="nav-link">
                    <div className='nav-button'>
                        <MoreHorizOutlinedIcon className="nav-icon" />
                        More
                    </div>
                </a>
            </div>
            <a href="/" className="tweet-button">
                Tweet
            </a>
        </div>
        <button  
            className="profile-button" 
            style={{ display: 'flex', padding: '12px', textDecoration: 'none'}}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <div style={{ width: '40px', marginRight: '10px' }} >
                <img src={profile} alt="profile" style={{ width: '100%', borderRadius: '20px' }}/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between'}}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '140px', font: '12px', color: 'white' }}>
                    <div>{post.name}</div>
                    <span style={{ color: '#71767B'}}>@{post.user} {currentUser.email}</span>
                </div>
                <MoreHorizOutlinedIcon style={{ color: 'white'}} />
            </div>
        </button>
        <Menu
            className='profile-popup'
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
            
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    </div>
    
  )
}
