import { useContext } from "react"
import { UserContext } from "../utils/hooks/contexts/UserContext"
export function PostContentButtons({data}) {
  const userContextData = useContext(UserContext);


  return (
    <div>{userContextData.id}</div>
  )
}