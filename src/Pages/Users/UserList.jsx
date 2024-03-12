import React, { useEffect, useState } from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import { userImages } from '../../Data';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


// Modal style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};


function UserList() {

  ///////////////////////////////////States///////////////////
  const [newUsers, setNewUsers] = useState([]);
  const [oldUsers, setOldUsers] = useState([]);
  const [openOldEditModal, setOpenOldEditModal] = useState(false);
  const [openOldDeleteModal, setOpenOldDeleteModal] = useState(false);
  const [openNewEditModal, setOpenNewEditModal] = useState(false);
  const [openNewDeleteModal, setOpenNewDeleteModal] = useState(false);
  const [userId, setUserId] = useState('');
  const [getData,setGetData] = useState(false);
  const [userType,setUserType]=useState('');


  /////////////////////////////////GetUsers///////////////////////////
  // const newUsers = useGetNewUsers('https://panel-admin-1-default-rtdb.firebaseio.com/newUsers.json');

  // const oldUsers = useGetOldUsers('https://panel-admin-1-default-rtdb.firebaseio.com/oldUsers.json');

  useEffect(() => {
    (
      async () => {

        await fetch('https://panel-admin-1-default-rtdb.firebaseio.com/newUsers.json')
          .then(res => res.json())
          .then(data => {
            setNewUsers(Object.entries(data).map((x, i) => ({
              number: i + 1,
              id: x[0],
              newUsername: x[1].newUsername,
              newEmail: x[1].newEmail
            })))
          })
      }

    )();
  }, [getData])

  useEffect(() => {
    (
      async () => {

        await fetch('https://panel-admin-1-default-rtdb.firebaseio.com/oldUsers.json')
          .then(res => res.json())
          .then(data => {
            setOldUsers(Object.entries(data).map((x, i) => ({
              number: i + 1,
              id: x[0],
              oldUsername: x[1].oldUsername,
              oldEmail: x[1].oldEmail
            })))
          })
      }

    )();
  }, [getData])

  // console.log('newUsers', newUsers);
  // console.log('oldUsers', oldUsers);

  let oldusersPlus = oldUsers.map((oldUser, index) => ({
    id: oldUser.id,
    number: oldUser.number,
    oldEmail: oldUser.oldEmail,
    oldUsername: oldUser.oldUsername,
    img: userImages[index].img
  }))

  // console.log('oldusersPlus', oldusersPlus);

  let newusersPlus = newUsers.map((newUser, index) => ({
    id: newUser.id,
    number: newUser.number,
    newEmail: newUser.newEmail,
    newUsername: newUser.newUsername,
    img: userImages[index].img
  }))

  // let newUserTemp = newUsers.map(newUser => ({
  //   id: newUser[0],
  //   newEmail: newUser[1].newEmail,
  //   newUsername: newUser[1].newUsername
  // }));

  // let oldUsersTemp = oldUsers.map(oldUser => ({
  //   id: oldUser[0],
  //   oldEmail: oldUser[1].oldEmail,
  //   oldUsername: oldUser[1].oldUsername
  // }))

  // useEffect(() => {
  //   // setNewUsersStd(newUserTemp);
  //   setOldUsersStd(oldUsersTemp)
  // }, [])

  // // console.log('newUserTemp', newUserTemp);
  // console.log('oldUsersTemp', oldUsersTemp);
  // // console.log('newUsersStd', newUsersStd);
  // console.log('oldUsersStd', oldUsersStd);
  ///////////////////////////Functions/////////////////////////////////////////////

  const userDelete = async id =>  {
    await fetch(`https://panel-admin-1-default-rtdb.firebaseio.com/${userType}/${id}`,
      {
        method:'DELETE'
      }
    ).
    then(res => console.log(res));

    setGetData(prev => !prev);

    
  }

  ////////////////////////////////old Rows and Columns//////////////////////////////
  const oldColumns = [
    { field: 'number', headerName: 'Number', width: 90 },
    {
      field: 'img',
      headerName: 'Image',
      width: 100,
      renderCell: params => {
        return (
          <img src={params.row.img} alt='userImage' className='UserImage' />
        )
      }
    },
    { field: 'id', headerName: 'ID', width: 200 },
    {
      field: 'oldUsername',
      headerName: 'Username',
      width: 200,
      editable: true,
    },
    {
      field: 'oldEmail',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: params => {
        return (
          <div className='Actions'>

            <Link to={`/users/${params.row.id}`}>
              <Button variant="contained"
                color="success"
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
            </Link>

            <DeleteIcon
              sx={{ color: 'red', fontSize: 40 }}
              style={{ cursor: 'pointer' }}
              onClick={e => {
                e.preventDefault();
                setOpenOldDeleteModal(true);
                setUserType('oldUsers');
                setUserId(params.row.id);
                console.log(params.row);
              }}
            />

            <div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openOldDeleteModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={openOldDeleteModal}>
                  <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                      Delete message
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                      Are you sure to delete this User?
                    </Typography>

                    <div className="deleteAction">
                      <Button variant="contained"
                        color="error"
                        onClick={() =>userDelete(userId)}
                        style={{ marginRight: '5px' }}
                      >
                        Yes
                      </Button>
                      <Button variant="contained"
                        color="success"
                        onClick={() => setOpenOldDeleteModal(false)}
                        style={{ marginRight: '5px' }}
                      >
                        No
                      </Button>
                    </div>
                  </Box>
                </Fade>
              </Modal>
            </div>

          </div>
        )
      }
    }
  ];

  const oldRows = oldusersPlus;
  console.log('oldRows', oldRows);

  const newColumn = [
    { field: 'number', headerName: 'Number', width: 90 },
    {
      field: 'img',
      headerName: 'Image',
      width: 100,
      renderCell: params => {
        return (
          <img src={params.row.img} alt='userImage' className='UserImage' />
        )
      }
    },
    { field: 'id', headerName: 'ID', width: 200 },
    {
      field: 'newUsername',
      headerName: 'Username',
      width: 200,
      editable: true,
    },
    {
      field: 'newEmail',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: params => {
        return (
          <div className='Actions'>

            <Link to={`/users/${params.row.id}`}>
              <Button variant="contained"
                color="success"
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
            </Link>

            <DeleteIcon
              sx={{ color: 'red', fontSize: 40 }}
              style={{ cursor: 'pointer' }}
              onClick={e => {
                e.preventDefault()
                setOpenNewDeleteModal(true)
                console.log(params.row);
                setUserId(params.row.id);
                setUserType('newUsers');
              }}
            />
            <div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openNewDeleteModal}
                onClose={e => e.preventDefault()}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={openNewDeleteModal}>
                  <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                      Delete message
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                      Are you sure to delete this User?
                    </Typography>

                    <div className="deleteAction">
                      <Button variant="contained"
                        color="error"
                        onClick={() => {
                          setOpenNewDeleteModal(false);
                          userDelete(userId);
                        }}
                        style={{ marginRight: '5px' }}
                      >
                        Yes
                      </Button>
                      <Button variant="contained"
                        color="success"
                        onClick={() => setOpenNewDeleteModal(false)}
                        style={{ marginRight: '5px' }}
                      >
                        No
                      </Button>
                    </div>
                  </Box>
                </Fade>
              </Modal>
            </div>

          </div>
        )
      }
    }
  ];

  const newRows = newusersPlus;


  return (
    <div className='UserList'>
      <div className="oldUsers">
        <h1 className="oldUsersHeader">List Of Old Users</h1>
        <DataGrid
          rows={oldRows}
          columns={oldColumns}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
              },
            },
          }}
        />
      </div>

      <div className="newUsers">
        <h1 className="newUsersHeader">List Of New Users</h1>
        <DataGrid
          rows={newRows}
          columns={newColumn}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
              },
            },
          }}
        />
      </div>

    </div>
  )
}

export default UserList