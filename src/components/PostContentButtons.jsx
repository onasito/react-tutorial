import { useContext } from "react"
import { UserContext } from "../utils/hooks/contexts/UserContext"
export function PostContentButtons({data}) {
  const userContextData = useContext(UserContext);


  return (
    <div>
      <div>
        <span>PostContentButtons</span>
      </div>
      {id}
      <br />
      <button onClick={() => {
        setUserData((currentState) => ({...currentState, 
            displayName: "Updated Display Name",
          }));
        }}
      >
        Click Me
      </button>
    </div>
  );
}