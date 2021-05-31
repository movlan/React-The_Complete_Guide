import React, { useState } from "react";

// import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value.trim());
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value.trim());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName === "" || age === "") return;
    props.addUser({ name: userName, age });
    setUserName("");
    setAge("");
  };

  return (
    <div className="form-control">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input onChange={userNameChangeHandler} value={userName} type="text" />
        <label>Age (Years)</label>
        <input onChange={ageChangeHandler} value={age} type="number" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
