import React from "react";
import "./App.css";
import SideBar from "./Component/SideBar.jsx";
import Navbar from "./Component/Navbar.jsx";
// import useDarkMode from "use-dark-mode";
import BarChart from "./Component/BarChart.jsx";


function App() {
  // const darkMode = useDarkMode(false)
  
  return (
    // ${darkMode.value ? 'dark' : ''}
    <div className={`  w-full flex bg-[#fffcf8] `}> 
        <SideBar />
        <div className="w-full block">
        <Navbar />
        <BarChart />
      </div>
    </div>
  );
}

export default App;
