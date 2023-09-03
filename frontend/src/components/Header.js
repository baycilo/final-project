import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const Header = ({ onLoginClick, onRegisterClick }) => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <Wrapper>
      <LeftSide>
        <Logo src="/images/logo1.jpg" alt="Company Logo" />
        <CompanyName>Star Fitness</CompanyName>
      </LeftSide>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </NavLinks>

      <ButtonGroup>
        {isLoggedIn ? (
          <LoginButton onClick={handleLogout}>Logout</LoginButton>
        ) : (
          <>
            <LoginButton onClick={onLoginClick}>Login</LoginButton>
            <RegisterButton onClick={onRegisterClick}>Register</RegisterButton>
          </>
        )}
      </ButtonGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #add8eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
  }
`;

const CompanyName = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  color: #000080;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;
    text-transform: uppercase;

    &:hover {
      color: #0077cc;
    }
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    gap: 1rem;
  }
`;

const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2e8b57;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003873;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
  }
`;

const RegisterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ff0000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0055a4;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
  }
`;

export default Header;
