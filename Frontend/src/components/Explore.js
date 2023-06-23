import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import profile from "./profile.png";
import lebron from "./lebron.jpg"
import '../styles.css';

export default function Explore() {
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data = [1, 2, 3, 4, 5];
  const post = {
    "profileImg": "profile.png",
    "name": "Henry Ingraham",
    "user": "funguy123",
    "date": "June 12",
    "payload": "My favorite player is Lebron James",
    "media": "src/components/lebron.jpg"

  };

  return (
    <div className='explore-content'>
        <div className='explore-header'>
            <h2 style={{ paddingLeft: '15px'}}>Home</h2>
            <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="white"
                indicatorColor="primary"
            >
                <Tab value="one" label="For You" sx={{ width: "50%" }}/>
                <Tab value="two" label="Following" sx={{ width: "50%" }} />
            </Tabs>
            </Box>
        </div>
        <div>
            {data.map(item => (
                <div key={item} className="post">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '12px 0'
                    }}>
                        <div style={{ width: '40px', height: '100%', marginRight: '10px' }} >
                            <img src={profile} alt="profile" style={{ width: '100%', borderRadius: '20px' }}/>
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
                            <img src={lebron} alt="media" style={{ width: '100%', borderRadius: '20px' }}/>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  );
}
