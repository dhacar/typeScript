import { useState } from "react";

type User = {
  username: string;
  email: string;
};

function UserProfile() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      <button
        onClick={() =>
          setUser({ username: "Zaki", email: "zaki@email.com" })
        }
      >
        Load User
      </button>

      {user && (
        <div>
          <h3>{user.username}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

export default UserProfile;