import React from 'react';

export default function app() {
  const mockUsers = [
    {
      id: 1,
      username: 'anson',
      email: "anson@ansonthedev.com"
    },
    {
      id: 2,
      username: 'michael',
      email: "michael@ansonthedev.com",
    },
  ]

  return (
    <div>
        {mockUsers.map((user)=> 
        {
          return ( 
            <div key={user.id}>
              <b>ID: </b>
              <span>{user.id}</span>
              <br />
              <b>Username: </b> 
              <span>{user.username}</span>
              <br />
              <b>Email: </b>
              <span>{user.email}</span>
              <br />
            </div>
          );
        })}
      </div>
  )
}