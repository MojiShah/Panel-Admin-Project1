import React, { useState } from 'react';
import './Person.css';
import { Navigate, useParams } from 'react-router-dom';
import useGetOldUsers from '../../../hooks/useGetOldUsers';
import useGetNewUsers from '../../../hooks/useGetNewUsers';

export default function Person() {

  /////////////////////////////////GetUsers///////////////////////////
  const newUsers = useGetNewUsers('https://panel-admin-1-default-rtdb.firebaseio.com/newUsers.json');

  const oldUsers = useGetOldUsers('https://panel-admin-1-default-rtdb.firebaseio.com/oldUsers.json');

  let params = useParams();
  console.log('params', params);

  let selectedOldUser = oldUsers.find(oldUser => oldUser.id == params.userID);
  let hasOldUser = oldUsers.some(oldUser => oldUser.id == params.userID);

  let selectedNewUser = newUsers.find(newUser => newUser.id == params.userID);
  let hasNewUser = newUsers.some(newUser => newUser.id == params.userID);


  console.log('selectedOldUser', selectedOldUser);
  console.log('selectedNewUser', selectedNewUser);
  /////////////////////////////////States///////////////////////////
  const [oldUserVal, setOldUserVal] = useState('');
  const [oldEmail, setOldEmail] = useState('');
  const [newUserVal, setNewUserVal] = useState('');
  const [newEmail, setNewEmail] = useState('');

  ////////////////////////////////functions/////////////////////////////////
  const editHandler = (e) => {
    e.preventDefault();
    console.log('edit:', params.userID);

    let editedInfos;
    if(hasOldUser){

      editedInfos ={
        oldUsername:oldUserVal,
        oldEmail:oldEmail
      };

      fetch(`https://panel-admin-1-default-rtdb.firebaseio.com/oldUsers/${params.userID}`,{
        method:'PUT',
        body: JSON.stringify(editedInfos)
      })
      .then(res => console.log(res));
      <Navigate to='/users' />

    }else{

      editedInfos={
        newUsername:newUserVal,
        newEmail:newEmail
      }

      fetch(`https://panel-admin-1-default-rtdb.firebaseio.com/newUsers/${params.userID}`,{
        method:'PUT',
        body:JSON.stringify(editedInfos)
      })
        .then(res => console.log(res));
      <Navigate to='/users' />

    }//end of if

  


    
  }
  //////////////////////////////////////////////////////////////////////////
  // let userTemp,emailTemp;
  // if(hasOldUser){
  //   userTemp = selectedOldUser.oldUsername;
  //   emailTemp = selectedOldUser.oldEmail;
  // }else if(hasNewUser){
  //   userTemp = selectedNewUser.newUsername;
  //   emailTemp = selectedNewUser.newEmail;
  // }

  // userTemp='Moji'

  // const [user, setUser] = useState(userTemp);
  // const [email, setEmail] = useState(emailTemp);

  // console.log('userTemp', userTemp);
  // console.log('user', user);
  // console.log('emailTemp', emailTemp);
  // console.log('email', email);


  return (<>
    {
      hasOldUser && (
        <div className='EditOldPersonData'>
          <form className='oldForm' onSubmit={e => editHandler(e)}>
            <div className="oldUsernameEdit" >
              <h3>Username: </h3>
              <input type="text"
                className="username"
                value={selectedOldUser.oldUsername}
                onChange={e => setOldUserVal(e.target.value)}
              />
            </div>
            <div className="oldEmailEdit">
              <h3>Email: </h3>
              <input type="email"
                className='email'
                value={selectedOldUser.oldEmail}
                onChange={e => setOldEmail(e.target.value)}
              />
            </div>

            <button className='editNewBtn'>
              Update informations
            </button>
          </form>

        </div>
      )
    }

    {
      hasNewUser && (
        <div className='EditNewPersonData'>
          <form className='newForm' onSubmit={e => editHandler(e)}>
            <div className="newUsernameEdit">
              <h3>Username: </h3>
              <input type="text"
                className="username"
                value={selectedNewUser.newUsername}
                onChange={e => setNewUserVal(e.target.value)}
              />
            </div>
            <div className="newEmailEdit">
              <h3>Email: </h3>
              <input type="email"
                className='email'
                value={selectedNewUser.newEmail}
                onChange={e => setNewEmail(e.target.value)}
              />
            </div>

            <button className='editNewBtn'>
              Update informations
            </button>
          </form>

        </div>
      )
    }
  </>
  )
}

