import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import './Sidebar.css'; // スタイルは別ファイルに分けることをお勧めします

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);