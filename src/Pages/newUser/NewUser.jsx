import React, { useState } from 'react';
import './NewUser.css';

export default function NewUser() {

  const [oldUsername, setOldUsername] = useState('');
  const [oldEmail, setOldEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');


  const oldSubmitHandler = (e) => {
    e.preventDefault();
    console.log('Old User');
    let oldUser = {
      oldUsername,
      oldEmail
    }

    // // const oldResponse = useFetchPostMethod('https://panel-admin-1-default-rtdb.firebaseio.com/oldUsers.json'
    // //   , oldUser)();

    // //   console.log('oldResponse', oldResponse);

    fetch('https://panel-admin-1-default-rtdb.firebaseio.com/oldUsers.json', {
      method: 'POST',
      body: JSON.stringify(oldUser)
    })
    setOldUsername('');
    setOldEmail('');
  }


  const newSubmitHandler = (e) => {
    e.preventDefault();
    console.log('New User');
    let newUser = {
      newUsername,
      newEmail
    };

    // // const newResponse = useFetchPostMethod('https://panel-admin-1-default-rtdb.firebaseio.com/newUsers.json'
    // //   , newUser)();
    // // console.log('newResponse', newResponse);

    fetch('https://panel-admin-1-default-rtdb.firebaseio.com/newUsers.json',{
      method:'POST',
      body: JSON.stringify(newUser)
    });
    setNewUsername('');
    setNewEmail('');
  }


  return (
    <div className='forms'>
      <form className="older-customsers" onSubmit={oldSubmitHandler}>
        <h3 className="older-customers-title">Older Customsers</h3>
        <div className="older-username">
          <span>username</span>
          <input type="text"
            placeholder='username'
            value={oldUsername}
            onChange={e => setOldUsername(e.target.value)}
          />
        </div>
        <div className="older-email">
          <span>email</span>
          <input type="email"
            placeholder='email'
            value={oldEmail}
            onChange={e => setOldEmail(e.target.value)}
          />
        </div>

        {!oldUsername.length && !oldEmail.length &&
          (<span className='warning'>please enter all values</span>)
        }

        {
          (oldUsername.length && oldEmail.length) ?
            (<button >Submit</button>)
            :
            (<button disabled>Submit</button>)
        }

      </form>

      <form className="new-customers" onSubmit={newSubmitHandler}>
        <h3 className="new-customers-title">New Customers </h3>
        <div className="new-username">
          <span>username</span>
          <input type="text"
            placeholder='username'
            value={newUsername}
            onChange={e => setNewUsername(e.target.value)}
          />
        </div>

        <div className="new-email">
          <span>email</span>
          <input type="email"
            placeholder='email'
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
          />
        </div>

        {!newUsername.length && !newEmail.length &&
          (<span className='warning'>please enter all values</span>)
        }

        {
          (newUsername.length && newEmail.length) ?
            (<button >Submit</button>)
            :
            (<button disabled>Submit</button>)
        }

      </form>

    </div>
  )
}
