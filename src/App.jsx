import { UserProfile } from "./components/UserProfile";

export default function app() {

  const callMe = ()=> {
    console.log("hello");
  };

  return (
  <div>
    <h1>Root component</h1>
    <UserProfile age={20} 
    isLoggedIn={true} 
    favoriteFoods={[
      {
        name: "sushi"
      },
    ]}
    callMe ={callMe}
    />
  </div>
);
}