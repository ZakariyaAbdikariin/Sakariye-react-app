function UserList() {
  const users = ["Sakariye", "Ahmed", "Mustafa", "Mohamed"];

  return (
    <ul>
      {users.map((users, index) => (
        <li key={index}>{users}</li>
      ))}
    </ul>
  );
}
export default UserList