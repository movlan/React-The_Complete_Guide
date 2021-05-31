import { useState } from "react";
import "./App.css";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    const newUser = {
      id: Math.random(),
      ...user,
    };
    setUsers((prevState) => {
      return [...prevState, newUser];
    });
  };

  return (
    <div className="App">
      <AddUserForm addUser={addUserHandler} />
      {users.length > 0 ? <UserList users={users} /> : null}
    </div>
  );
}

export default App;
