import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
