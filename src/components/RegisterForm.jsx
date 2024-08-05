import {useState} from 'react';

export function RegisterForm() {

  const [formFields, setFormFields] = useState({
    username: "",
    pasword: "",
    displayName: "",
  })

  console.log(formFields)
   
  return (
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input 
          id="username" 
          value={formFields.username} 
          onChange={(e) => {
            setFormFields((currentState)=> ({...currentState, username: e.target.value}))
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          id="password" 
          value={formFields.password} 
          onChange={(e)=> {
            setFormFields((currentState)=> ({...currentState, password: e.target.value}))
          }}
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name</label>
        <input 
          id="displayName" 
          value={formFields.displayName} 
          onChange={(e)=> {
            setFormFields((currentState)=> ({...currentState, displayName: e.target.value}))
          }}
        />
      </div>
      <div>
        <span>Username: {formFields.username}</span>
      </div>
      <div>
        <span>Password: {formFields.pasword}</span>
      </div>
      <div>
        <span>Display Name: {formFields.displayName}</span>
      </div>
      {/*<button disabled={isDisabled}>Sign Up</button>*/}
    </form>
  );
}