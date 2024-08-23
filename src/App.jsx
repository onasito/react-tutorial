import { useState } from "react";
import { PostContainer } from "./components/PostContainer";
import { PostContentButtons } from "./components/PostContentButtons";
import { UserContext } from "./utils/hooks/contexts/UserContext";

export default function App() {
  const [userData, setUserData] = useState({
    id: 1,
    username: "ansonthedev",
    email: "ansonthedev@gmail.com",
    displayName: "Anson The Developer",
  });

  return (
    <>
      <UserContext.Provider value={{...userData, setUserData: setUserData}}>
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
    </>
  )
}