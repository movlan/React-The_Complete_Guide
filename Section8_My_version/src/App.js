import { useState } from "react";
import "./App.css";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import Modal from "./components/Modal/Modal";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [modalMessage, setModalMessage] = useState("");

  const addUserHandler = (user) => {
    const newUser = {
      id: Math.random(),
      ...user,
    };
    setUsers((prevState) => {
      return [...prevState, newUser];
    });
  };

  const deleteUserHandler = (id) => {
    setUsers((prevState) => {
      const newUsers = prevState.filter((user) => user.id !== id);
      return newUsers;
    });
  };

  const handleError = (msg) => {
    setModalMessage(msg);
  };

  const closeModal = () => {
    setModalMessage("");
  };

  const modalWithMessage = (
    <Modal open={modalMessage !== ""} closeModal={closeModal}>
      {modalMessage}
    </Modal>
  );

  return (
    <div className="App">
      {modalWithMessage}
      <AddUserForm addUser={addUserHandler} handleError={handleError} />

      <UserList users={users} deleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
