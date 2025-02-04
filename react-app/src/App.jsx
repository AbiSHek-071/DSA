import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TestChild from "./TestChild";

function App() {
  const Data = "THE DATA FROM APP";

  return (
    <>
      <h1>app</h1>
      <TestChild Data={Data} />
    </>
  );
}

export default App;
