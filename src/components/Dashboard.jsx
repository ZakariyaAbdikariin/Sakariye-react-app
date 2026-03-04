function Dashboard({ isLoggedIn }) {
    return (
  <div>{isLoggedIn ? <p>You are logged in!</p> : <p>Please log in</p> }
  </div>
    );
}
export default Dashboard