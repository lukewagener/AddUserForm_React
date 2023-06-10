/**
 * @file App.js
 * @author Luke Wagener
 * @date 6/10/2023
 * 
 * This is the root component of the application.
 * It manages the list of users and handles the addition of new users.
 */

import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

/**
 * App component.
 *
 * Maintains the state of the users list and defines the user addition functionality.
 */
function App() {
  const [usersList, setUsersList] = useState([]);

  /**
   * addUserHandler function.
   * Adds a new user to the existing users list.
   *
   * @param {string} userName - The name of the new user
   * @param {string} userAge - The age of the new user
   */
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
