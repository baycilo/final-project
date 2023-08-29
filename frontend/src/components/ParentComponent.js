import React, { useState } from "react";
import RegisterModal from "./RegisterModal";
import ImageDiv from "./ImageDiv";
import ServiceText from "./ServiceText";

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ImageDiv openModal={openModal} />
      <ServiceText openModal={openModal} />
      <RegisterModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ParentComponent;
