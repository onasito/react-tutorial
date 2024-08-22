import { PostContent } from "./PostContent";
import { useContext, useState } from "react";
import { UserContext } from "../utils/hooks/contexts/UserContext";

export function PostContainer() {
  const [data, setData] = useState("hello world")
  const userContextData = useContext(UserContext);

  console.log(userContextData);

  return (
    <div>
      <PostContent data={data} />
      <div>{userContextData.displayName}</div>
    </div>
  )
}