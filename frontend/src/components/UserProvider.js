import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // assuming the user is null initially
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
///////////////////////////////////////////////////////////////////////////////////////
/*
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // assuming the user is null initially

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
*/
