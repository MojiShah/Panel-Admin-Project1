import React from 'react';
import './SideBar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import { MailOutline } from '@mui/icons-material';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sibebarList">
                        <Link to='/' className='link'>
                            <li className="sidebarListItem active">
                                <LineStyleIcon className='sidebar-icon' sx={{ fontSize: 15 }} />Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebar-icon' sx={{ fontSize: 15 }} />Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className='sidebar-icon' sx={{ fontSize: 15 }} />Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Quick Menu</h3>
                    <ul className="sibebarList">
                        <Link to='/users' className='link'>
                            <li className="sidebarListItem active">
                                <PermIdentityIcon className='sidebar-icon' sx={{ fontSize: 20 }} />Users
                            </li>
                        </Link>
                        <Link to='/newuser' className='link'>
                            <li className="sidebarListItem">
                                <PermIdentityIcon className='sidebar-icon' sx={{ fontSize: 20 }} />New User
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <StorefrontIcon className='sidebar-icon' sx={{ fontSize: 20 }} />Products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className='sidebar-icon' sx={{ fontSize: 20 }} />Transaction
                        </li>
                        <li className="sidebarListItem">
                            <BarChartIcon className='sidebar-icon' sx={{ fontSize: 20 }} />Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className="sibebarList">
                        <li className="sidebarListItem active">
                            <MailOutline className='sidebar-icon' sx={{ fontSize: 20 }} />Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className='sidebar-icon' sx={{ fontSize: 20 }} />Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className='sidebar-icon' sx={{ fontSize: 20 }} />Messages
                        </li>
                    </ul>
                </div>

                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sibebarList">
                        <li className="sidebarListItem active">
                            <WorkOutlineIcon className='sidebar-icon' sx={{ fontSize: 20 }} />Manage
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className='sidebar-icon' sx={{ fontSize: 20 }} />Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportIcon className='sidebar-icon' sx={{ fontSize: 20 }} />Reports
                        </li>
                    </ul>
                </div>


            </div>
        </div>
    )
}
