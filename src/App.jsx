export default function App() {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return (
      <div>
        <h1>Welcome, User!</h1>
      </div>
    );
  }

  return (
    <div>
      <span>You are not logged in</span>
    </div>
  );
}