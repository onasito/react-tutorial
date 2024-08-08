import { useState } from "react";
import { UserDetails } from "./components/UserDetails";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "anson",
      email: "anson@gmail.com"
    },
    {
      id: 2,
      username: "mike",
      email: "mike@gmail.com"
    },
  ]);

  return (
  <div>
    {users.map((user)=> <UserDetails key={user.id} user={user} setUsers={setUsers} />)}
  </div>
  )
}