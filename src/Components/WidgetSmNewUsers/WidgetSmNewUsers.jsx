import React, { useEffect, useState } from 'react';
import './WidgetSmNewUsers.css';
import { Link } from 'react-router-dom';
import { Visibility } from '@mui/icons-material';
import { VisibilityOff } from '@mui/icons-material';
import UseGetUsersData from '../../hooks/UseGetUsersData';
import { userImages } from '../../Data';
import { myVisibility } from '../../Data';



export default function WidgetSmNewUsers() {
    const [visibilityToggle, setVisibilityToggle] = useState(true);
    const [btnVisible, setBtnVisible] = useState(myVisibility);
    const [newUserImages, setNewUserImages] = useState(userImages);

    useEffect(()=>{
        console.log('btnvVisible', btnVisible);
    }, [btnVisible, visibilityToggle])

    const newUsers = UseGetUsersData('https://panel-admin-1-default-rtdb.firebaseio.com/newUsers.json');




    return (
        <div className='WidgetSmNewUsers'>
            <span className="WidgetSmTitle">New Joined Members</span>
            <ul className='widgetSmList'>

                {newUsers.map((newUser, index) => {
                    if (index < 3) {
                        return (
                            <li key={newUserImages[index].id} className={btnVisible[index].value ? 'widgetSmListItem' : 'widgetSmListItemOpacity'}>
                                <img src={newUserImages[index].img} alt="newUser" className="widgetSmImg" />
                                <div className="widgetSmUser">
                                    <span className="newUsername">{newUser[1].newUsername}</span>
                                    <span className="newEmail">{newUser[1].newEmail}</span>
                                </div>
                                <button className='widgetSmButton'
                                    onClick={() => {
                                        btnVisible.map((el, i) => 
                                        i == index ? 
                                        el.value = !el.value :
                                        el.value = el.value
                                        )
                                        setVisibilityToggle(btnVisible[index].value)
                                    }}>
                                    {btnVisible[index].value ?
                                        (<Visibility className='widgetSmButtonIcon' />) :
                                        (<VisibilityOff className='widgetSmButtonIcon' />)
                                    }
                                </button>
                            </li>
                        )
                    }
                })}
                <li className='moreButton'>
                    <Link to='/users'>
                        <button>
                            More...
                        </button>
                    </Link>
                </li>
            </ul>

        </div>
    )
}
