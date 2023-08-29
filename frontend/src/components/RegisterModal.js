import React from "react";
import Modal from "./Modal";
import RegisterForm from "./RegisterForm";

const RegisterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <Modal onClose={onClose}>
      <p>Register to have access</p>
      <RegisterForm onRegister={onClose} />
    </Modal>
  );
};

export default RegisterModal;
