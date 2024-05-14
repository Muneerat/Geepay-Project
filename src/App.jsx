import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./Component/SideBar.jsx";
import NavBar from "./Component/NavBar.jsx";

function App() {
  return (
    <div>
      <div className="flex">
        <SideBar />
        <div>
        <NavBar />

        </div>
      </div>
    </div>
  );
}

export default App;
