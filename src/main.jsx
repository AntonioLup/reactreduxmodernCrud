import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
ReactDOM.createRoot(container).render(
  <Provider store={store}>
    <App />
  </Provider>
);
