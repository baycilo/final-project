import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Step 1: Import the useNavigate hook
import UserContext from "./UserContext";
import { StyledInput } from "./Modal";

const RegisterForm = ({ onRegister }) => {
  const navigate = useNavigate(); // Step 2: Initialize it
  const { setUser, setIsLoggedIn } = useContext(UserContext);
  const [givenName, setGivenName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          givenName,
          surname,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setIsLoggedIn(true); // Set the logged-in state to true
        onRegister();
        navigate("/profile"); // Step 3: Redirect to the profile page after successful registration
      } else {
        setError(data.error || "Failed to register.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <StyledInput
        type="text"
        placeholder="Given Name"
        value={givenName}
        onChange={(e) => setGivenName(e.target.value)}
        required
      />
      <StyledInput
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        required
      />
      <StyledInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <StyledInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

export default RegisterForm;

/////////////////////////////////////////////////////////////////////////////////////////////
/*

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Step 1: Import the useNavigate hook
import UserContext from "./UserContext";

const RegisterForm = ({ onRegister }) => {
  const navigate = useNavigate(); // Step 2: Initialize it
  const { setUser } = useContext(UserContext);
  const [givenName, setGivenName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          givenName,
          surname,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        onRegister();
        navigate("/profile"); // Step 3: Redirect to the profile page after successful registration
      } else {
        setError(data.error || "Failed to register.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Given Name"
        value={givenName}
        onChange={(e) => setGivenName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

export default RegisterForm;

*/
