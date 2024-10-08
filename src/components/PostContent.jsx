import { useContext } from "react"
import { PostContentButtons } from "./PostContentButtons"
import { UserContext } from "../utils/hooks/contexts/UserContext";

export function PostContent({data}) {

  const userContextData = useContext(UserContext);


  return (
    <div>
      <div>
        <span>PostContent</span>
      </div>
      <PostContentButtons />
      {userContextData.email}
    </div>
  )
}