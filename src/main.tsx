/* eslint-disable comma-dangle */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import { Provider } from 'jotai';
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    // <Provider>
      <Router>
        <App />
      </Router>
    // </Provider>
  // </React.StrictMode>
);
