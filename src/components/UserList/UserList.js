import React from "react";

import Card from "../UI/Card";

import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card>
      <ul>
        {props.users.length === 0 ? (
          <li>No user added</li>
        ) : (
          props.users.map((user) => (
            <li key={user.id} onClick={() => props.deleteUser(user.id)}>
              {user.name} ({user.age} years old)
            </li>
          ))
        )}
      </ul>
    </Card>
  );
};

export default UserList;
