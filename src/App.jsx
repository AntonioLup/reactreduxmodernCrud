import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./components/container/Form";
import Link from "./components/container/Link";

function App() {
  return (
    <div className="App">
      <Link />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <Form />
    </div>
  );
}

export default App;
