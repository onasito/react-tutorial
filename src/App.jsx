import { PostContainer } from "./components/PostContainer";
import { PostContentButtons } from "./components/PostContentButtons";
import { UserContext } from "./utils/hooks/contexts/UserContext";

export default function App() {

  return (
    <>
      <UserContext.Provider value={{
        id: 1,
        username: "ansonthedev",
        email: "ansonthedev@gmail.com",
        displayName: "Anson The Developer"
        }}>
        <div>
          <PostContainer />
        </div>
      </UserContext.Provider>
      <PostContentButtons />
    </>
  )
}