import React from 'react'
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useAuth } from '../context/AuthContext';

import profile from "./profile.png";
import lebron from "./lebron.jpg"
import getData from '../data'; 

export default function Explore() {
    const [value, setValue] = React.useState('one');
    const [tweets, setTweets] = useState(getData().tweets);
    const {currentUser} = useAuth()


    const handleChange = (event, newValue) => {
    setValue(newValue);
    };
    

    return (
        <div className='explore-content'>
            <div className='explore-header'>
                <h4 style={{ padding: '15px'}}>Home</h4>
                <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    indicatorColor="primary"
                >
                    <Tab value="one" label="For You" sx={{ width: "50%" }}/>
                    <Tab value="two" label="Following" sx={{ width: "50%" }} />
                </Tabs>
                </Box>
            </div>
            <div>
                {tweets && tweets.length > 0 ?
                tweets.map(post => (
                    <div key={post.id} className="post">
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            padding: '12px 0'
                        }}>
                            <div style={{ width: '40px', height: '100%', marginRight: '10px' }} >
                                <img src={post.profileImg} alt="profile" style={{ width: '100%', borderRadius: '20px' }}/>
                            </div>
                            <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%'
                            }}>
                                <div>
                                    {post.name} <span style={{ color: '#71767B'}}>@{post.user} · {post.date}</span>
                                </div>
                                <div style={{  marginBottom: '10px' }}>
                                    {post.payload}
                                </div>
                                <img src={post.media} alt="media" style={{ width: '100%', borderRadius: '20px' }}/>
                            </div>
                        </div>
                    </div>
                )) : <h3> {'No Tweets Yet 😞'} </h3>
            }
            </div>
        </div>
    );
}
