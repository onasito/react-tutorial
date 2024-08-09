import PropTypes from 'prop-types';
import { useState } from 'react';

export function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setUserEmail] = useState(user.email);


  return (
    <div>
      <div>
        <button 
          onClick={() => {
            setIsEditing((currentState) => !currentState);
          }}
        >
          Edit
        </button>
        <button>Delete</button>
        <button onClick={()=> {
          setUsers(
            (currentUsersState) => {
              return currentUsersState.map(
                (currentUser) => {
                  if (currentUser.id === user.id)
                    return {...currentUser, username: username, email: email};
                  else return currentUser;
                } 
              )
            }
          )
        }}>Save</button>
      </div>
      <div>
        <b>ID: </b>
        <span>{user.id}</span>
        <br />
        <b>Username: </b> 
        {isEditing ? <input name='username' id='username' value={username} onChange={(e) => {
            setUsername(e.target.value)
          }}  
        />  : 
          <span>{user.username}</span>
        } 
        <br />
        <b>Email: </b>
        {isEditing ? <input name='email' id='email' value={email} onChange={(e) => {
            setUserEmail(e.target.value)
          }} 
        /> : 
          <span>{user.email}</span>
        }
        <br />
      </div>
    </div>
  );
}

UserDetails.propTypes =  {
    user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,

  setUsers: PropTypes.func.isRequired,
}