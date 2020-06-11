import App from "./app";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
