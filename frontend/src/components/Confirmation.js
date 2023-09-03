import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container>
      <Header>Confirmation</Header>
      <Message>
        Your booking has been confirmed. We look forward to seeing you!
      </Message>
      <GoBackButton onClick={handleGoBack}>Go Back to Homepage</GoBackButton>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Header = styled.h1`
  color: #4caf50;
  margin-bottom: 30px;
`;

const Message = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
  text-align: center;
  max-width: 600px;
  line-height: 1.5;
`;

const GoBackButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Confirmation;
