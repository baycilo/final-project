import React from "react";

const ImageDiv = ({ openModal }) => (
  <div>
    {/* Other content */}
    <button onClick={openModal}>Register</button>
  </div>
);

const ServiceText = ({ openModal }) => (
  <div>
    {/* Other content */}
    <button onClick={openModal}>Register</button>
  </div>
);

export { ImageDiv, ServiceText };
