import React, { useState, useContext } from "react"; // Added useContext
import UserContext from "./UserContext"; // Imported UserContext
import { StyledInput } from "./Modal";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setIsLoggedIn } = useContext(UserContext); // Extracted the setUser method from UserContext

  const handleLogin = async (e) => {
    e.preventDefault();

    // Construct payload
    const payload = {
      email: email,
      password: password,
    };

    try {
      // Make the API call to the /login endpoint
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user); // Assuming the API returns the user object under the 'user' key
        setIsLoggedIn(true); // Set the logged-in state to true
        onLogin(); // Trigger the onLogin callback if successful
        console.log("login successful");
      } else {
        alert(data.error || "There was an error logging in.");
      }
    } catch (err) {
      console.error("There was an error making the login request:", err);
      alert("There was an error logging in. Please try again.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <StyledInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

//////////////////////////////////////////////////////////////////////////////////////////////
/*
import React, { useState, useContext } from "react"; // Added useContext
import UserContext from "./UserContext"; // Imported UserContext

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setIsLoggedIn } = useContext(UserContext); // Extracted the setUser method from UserContext

  const handleLogin = async (e) => {
    e.preventDefault();

    // Construct payload
    const payload = {
      email: email,
      password: password,
    };

    try {
      // Make the API call to the /login endpoint
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user); // Assuming the API returns the user object under the 'user' key
        onLogin(); // Trigger the onLogin callback if successful
        console.log("login successful");
      } else {
        alert(data.error || "There was an error logging in.");
      }
    } catch (err) {
      console.error("There was an error making the login request:", err);
      alert("There was an error logging in. Please try again.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
*/
//////////////////////////////////////////////////////////////////////////////////////////////////
