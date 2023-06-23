import React from 'react'
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
import '../styles.css';

export default function Navigation() {
  return (
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
    
  )
}
