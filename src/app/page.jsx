

export default async function Home() {
  // use { cache: 'no-store' } to disable caching
  const users = await fetch(process.env.URL + "/api/users", { cache: 'no-store' })
    .then((res) => res.json())
    .catch((error) => console.error(error));

  return (
    <div>
      <div>Hello!</div>
      <div>
        <h1>Users</h1>
        {users && users.map((user) => (
          <div key={user._id}>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
