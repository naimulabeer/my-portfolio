import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { scroll } from "framer-motion/dom";

const progressWheel = document.querySelector(".progress");

scroll((progress) => {
  progressWheel.style.strokeDasharray = `${progress}, 1`;
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
