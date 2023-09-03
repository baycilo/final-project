import React, { useState, useContext } from "react";
import UserContext from "./UserContext";
import { StyledInput, Button } from "./Modal";
import styled from "styled-components";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setIsLoggedIn } = useContext(UserContext);
  const [error, setError] = useState("");

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
        setUser(data.user);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true"); // store the state
        onLogin();
        console.log("login successful");
        setError("");
      } else {
        setError(data.error || "There was an error logging in.");
      }
    } catch (err) {
      console.error("There was an error making the login request:", err);
      setError("There was an error logging in. Please try again.");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
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
      <Button type="submit">Login</Button>
    </form>
  );
};

const ErrorMessage = styled.div`
  background-color: red;
  color: white;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
`;

export default LoginForm;
