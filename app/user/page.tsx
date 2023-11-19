import { createUser } from "../api/seed";

export default function UserPage() {
  const users = [
    createUser("username_0", "email0@kmdb.info"),
    createUser("uername_1", "email1@kmdb.info"),
  ];

  return (
    <div id="user-profile">
      {users &&
        users.map((u) => (
          <ul key={u.id}>
            <li>{u.username}</li>
            <li>{u.email}</li>
          </ul>
        ))}
    </div>
  );
}
