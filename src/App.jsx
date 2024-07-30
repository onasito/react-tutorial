export default function App() {
  const isAuthenticated = true;

  return isAuthenticated ? (
  <div>
    <h1>Welcome, User!</h1>
  </div>
   ) : (
    <div>
      <h1>You are not logged in</h1>
    </div>
   );
}