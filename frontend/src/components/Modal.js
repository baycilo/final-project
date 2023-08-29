import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Ensure this value is higher than the z-index of any other overlapped element
`;

const ModalContent = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  margin: 20px;
  width: 400px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0; // Add margin to create space between inputs
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Modal = ({ children, onClose }) => {
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
export { StyledInput };
