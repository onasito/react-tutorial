import {createElement} from "react";

export function UserFavoriteFoods() {
  return createElement(
    'section', 
    null, 
    <span>Favorite Food:</span>,
    <br/>,
    <ul>
      <li>Sushi</li>
      <li>Pizza</li>
      <li>Mediterranean Food</li>
    </ul>
    )
}