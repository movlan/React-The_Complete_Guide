import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevState) => {
      const newUser = { id: Math.random().toString(), ...user };
      return [...prevState, newUser];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {users.length > 0 ? <UsersList users={users} /> : null}
    </div>
  );
}

export default App;
