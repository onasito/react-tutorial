import { UserFavoriteFoods } from "./UserFavoriteFoods";
import { UserUsername } from "./UserUsername";

export function UserProfile(props) {
  return (
  <div id="user-profile">
    <UserUsername username="bob" />
    <b>Age: </b>
    <span>{props.age}</span>
  </div>
  );
}