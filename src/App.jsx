import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    console.log('Rendering...')
    document.title = "React Tutorial " + counter;
  }, [sync]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const json = await response.json();
        console.log(json)
      } catch(err) {
        console.log(err)
      }
    }
    fetchUsers();
  })

  return (
    <div>
      <div>
        You clicked the button {counter} times
      </div>
      <button onClick={() => setCounter((count) => count + 1)}>Click Me</button>
      <button onClick={() => setSync((current) => !current)}>Sync</button>
    </div>
  );
}