import React from "react";
import Modal from "./Modal";
import RegisterForm from "./RegisterForm";

const RegisterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <h4>Register to have access</h4>
      <RegisterForm onRegister={onClose} />
    </Modal>
  );
};

export default RegisterModal;
