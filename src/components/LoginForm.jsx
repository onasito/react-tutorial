export function LoginForm() {
  return (
    <form 
      onSubmit={(e)=> {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData.get("username"));
      }}
    >
      <label htmlFor="username">Username</label>
      <br />
      <input 
        id="username" 
        onChange={(e)=> { 
          console.log(`Username: ${e.target.value}`);
        }}
        name="username"
      />
      <br/>
      <label htmlFor="password">Password</label>
      <br />
      <input 
        id="password" 
        type="password" 
        onChange={(e)=> {
          console.log(`Password: ${e.target.value}`)
        }}
        name="password"
      />
      <br />
      <button>Login</button>
    </form>
  )
}