import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const Footer = ({ onRegisterClick }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Wrapper>
      <Section>
        <Title>Follow Us</Title>
        <SocialLinks>
          <a href="#!">
            <img src="images/facebookimage.png" alt="Facebook" />
          </a>
          <a href="#!">
            <img src="images/Twittwerimage.png" alt="Twitter" />
          </a>
          <a href="#!">
            <img src="images/Instagramimage.png" alt="Instagram" />
          </a>
        </SocialLinks>
      </Section>
      <Section>
        <Title>Quick Links</Title>
        <Links>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </Links>
      </Section>
      <Section>
        <Title>Address</Title>
        <AddressWithButton>
          <Address>123 Main St., Fitness City, 12345</Address>
          {isLoggedIn ? (
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          ) : (
            <RegisterButton onClick={onRegisterClick}>Register</RegisterButton>
          )}
        </AddressWithButton>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 2rem 4rem;
  background-color: #40e0d0;
  border-top: 1px solid #40e0d0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  gap: 1rem;

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;

    &:hover {
      color: #800080;
    }
  }
`;

const AddressWithButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
`;

const Address = styled.p`
  margin: 0;
  padding-bottom: 1rem;
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
    background-color: #ff4500;
  }
`;

const Section = styled.section`
  flex: 1;
  min-width: 200px;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #ff0000;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 30px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.5rem;
  }
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2e8b57; // you can change this to a preferred color for logout
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003873; // you can change this to a preferred hover color for logout
  }
`;

export default Footer;

/*
import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";

const Footer = ({ onRegisterClick }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Wrapper>
      <Section>
        <Title>Follow Us</Title>
        <SocialLinks>
          <a href="#!">
            <img src="images/facebookimage.png" alt="Facebook" />
          </a>
          <a href="#!">
            <img src="images/Twittwerimage.png" alt="Twitter" />
          </a>
          <a href="#!">
            <img src="images/Instagramimage.png" alt="Instagram" />
          </a>
        </SocialLinks>
      </Section>
      <Section>
        <Title>Quick Links</Title>
        <Links>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </Links>
      </Section>
      <Section>
        <Title>Address</Title>
        <AddressWithButton>
          <Address>123 Main St., Fitness City, 12345</Address>
          {isLoggedIn ? (
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          ) : (
            <RegisterButton onClick={onRegisterClick}>Register</RegisterButton>
          )}
        </AddressWithButton>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-around;
  padding: 2rem 4rem;
  background-color: #40e0d0;
  border-top: 1px solid #40e0d0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    align-items: center;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  gap: 1rem;

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s;

    &:hover {
      color: #800080;
    }
  }
`;

const AddressWithButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
`;

const Address = styled.p`
  margin: 0;
  padding-bottom: 1rem;
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
    background-color: #ff4500;
  }
`;

const Section = styled.section`
  flex: 1;
  min-width: 200px;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    text-align: center;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #ff0000;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  img {
    width: 30px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.5rem;
  }
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2e8b57; // you can change this to a preferred color for logout
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003873; // you can change this to a preferred hover color for logout
  }
`;

export default Footer;

*/
