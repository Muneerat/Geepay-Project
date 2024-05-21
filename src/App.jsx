import React from "react";
import "./App.css";
import SideBar from "./Component/SideBar.jsx";
import Navbar from "./Component/Navbar.jsx";
import useDarkMode from "use-dark-mode";


function App() {
  const darkMode = useDarkMode(false)
  
  return (
    <div className={`${darkMode.value ? 'dark' : ''}  w-full flex bg-[#fffcf8] `}> 
        <SideBar />
        <div className="w-full block">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
