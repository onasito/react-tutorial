export function LoginForm() {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <br />
      <input 
        id="username" 
        onChange={(e)=> { 
          console.log(e.target.value);
        }}
        />
      <br/>
      <label htmlFor="password">Password</label>
      <br />
      <input id="password" type="password"/>
      <br />
      <button>Login</button>
    </form>
  )
}