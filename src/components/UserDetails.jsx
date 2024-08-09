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
        <button onClick={() => {
          setUsers((currentUserState) => currentUserState.filter(
            (currentUser) => currentUser.id !== user.id
          ));
        }}>Delete</button>
        {isEditing && (<button onClick={()=> {
          setUsers(
            (currentUsersState) => 
              currentUsersState.map(
                (currentUser) => currentUser.id === user.id ? ({...currentUser, username, email}) : currentUser)
              );
              setIsEditing(false);
        }}>Save</button>)}
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