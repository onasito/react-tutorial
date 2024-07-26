import { UserProfile } from "./components/UserProfile";

export default function app() {

  const callMe = ()=> {
    console.log("hello");
  };

  return (
  <div>
    <h1>Root component</h1>
    <UserProfile 
    username = "Bob"
    age={20} 
    isLoggedIn={true} 
    favoriteFoods={[
      {
        name: "Sushi",
        id: "sushi",
      },
      {
        name: "pizza",
        id: "Pizza",
      },
    ]}
    callMe ={callMe}
    />
  </div>
);
}