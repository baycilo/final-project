import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Retrieve values from the form
    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const message = e.target.elements[2].value;

    // Send the message to the backend
    try {
      const response = await fetch("/contact/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();

      if (response.ok) {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate("/");
        }, 4000);
      } else {
        console.error("Failed to send message:", data.error);
      }
    } catch (error) {
      console.error("Error occurred while sending message:", error);
    }
  };

  return (
    <Wrapper>
      {showModal && (
        <Modal>
          <p>
            Your message has been sent!
            <br /> We will get in touch with you as soon as possible.
          </p>
        </Modal>
      )}

      <Section>
        <Title>Get in Touch</Title>
        <p>
          We'd love to hear from you. Whether you have a question about our
          services, pricing, or anything else, our team is ready to assist you.
        </p>
      </Section>

      <Section>
        <Title>Our Location</Title>
        <p>123 Fitness St., Fit City, 12345</p>
        <MapImage src="images/mapimage3.jpeg" alt="Our Location on Map" />
      </Section>

      <Section>
        <Title>Contact Us</Title>
        <Form onSubmit={handleFormSubmit}>
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <TextArea placeholder="Your Message"></TextArea>
          <SubmitButton type="submit">Send</SubmitButton>
        </Form>
      </Section>

      <Section></Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  color: white;
  background-color: black;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const MapImage = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.4rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  height: 150px;
  border-radius: 5px;
  border: 1px solid #ddd;
  width: 100%;

  @media (max-width: 768px) {
    height: 120px;
    padding: 0.4rem;
  }
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #0077cc;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: #0055a4;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #800000;
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    width: 90vw;
  }

  // Styling the paragraph inside the modal
  p {
    font-weight: bold;
    font-size: 1.2em;
    text-align: center;
    margin: 0;
    line-height: 1.5;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
`;

export default Contact;
