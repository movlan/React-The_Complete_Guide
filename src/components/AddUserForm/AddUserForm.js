import React, { useState } from "react";
import Card from "../UI/Card";

import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName.trim() === "" && age === "") {
      props.handleError("You must enter Username and user age");
      return;
    }
    if (userName.trim() === "") {
      props.handleError("You must enter Username");
      return;
    }
    if (age === "") {
      props.handleError("You must enter user age");
      return;
    }
    props.addUser({ name: userName, age });
    setUserName("");
    setAge("");
  };

  return (
    <Card>
      <div className="form-control">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            onChange={userNameChangeHandler}
            value={userName}
            type="text"
          />
          <label>Age (Years)</label>
          <input onChange={ageChangeHandler} value={age} type="number" />
          <button type="submit">Add User</button>
        </form>
      </div>
    </Card>
  );
};

export default AddUserForm;
