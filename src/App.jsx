import React from "react";
import "./App.css";
import SideBar from "./Component/SideBar.jsx";
import NavBar from "./Component/NavBar.jsx";
import useDarkMode from "use-dark-mode";


function App() {
  const darkMode = useDarkMode(false)
  
  return (
    <div className={`${darkMode.value ? 'dark' : ''} dark:bg-blak w-full flex  `}> 
  
        <SideBar />
        <div className="w-full block">
        <NavBar />

      
      </div>
    </div>
  );
}

export default App;
