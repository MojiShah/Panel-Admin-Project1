import React from 'react';
import './TopBar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
    return (
        <div className='TopBar'>
            <div className="topbar-leftside">
                <img src="images/Logo.PNG" alt="Logo" />
            </div>
            <div className="topbar-rightside">
                <div className="topbarIconContainer">
                    <NotificationsIcon sx={{ fontSize: 30 }} />
                    <span className='TopIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <LanguageIcon sx={{ fontSize: 30 }} />
                    <span className='TopIconBadge'>2</span>
                </div>
                <div className="topbarIconContainer">
                    <SettingsIcon sx={{ fontSize: 30 }} />
                </div>

                <img src="images/Me.jpeg" alt="UserMoji" />
            </div>
        </div>
    )
}
