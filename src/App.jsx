import React from "react";
import "./App.css";
import SideBar from "./Component/SideBar.jsx";
import Navbar from "./Component/Navbar.jsx";
// import useDarkMode from "use-dark-mode";
import BarChart from "./Component/BarChart.jsx";
import BoxBars from "./Component/BoxBars.jsx";
import Table from "./Component/Table.jsx";
import BoxPlatform from "./Component/BoxPlatform.jsx";

function App() {
  // const darkMode = useDarkMode(false)

  return (
    // ${darkMode.value ? 'dark' : ''}
    <div className={`w-full flex bg-[#fffcf8]`}>
      <SideBar />
      <div className="w-full block">
        <Navbar />
        <div className="max-w-screen-2xl max-w- m-auto overflow-auto" style={{height: `calc(-100px + 100vh)`, width: `calc(-80px + 100vw)` }}>
        <div className="lg:flex w-full justify-center">
          <BarChart />
          <BoxBars />
        </div>
        <div className="flex justify-center w-full m-auto items-center">
          <Table />
          <BoxPlatform />
        </div>
        </div>
       
    
      </div>
    </div>
  );
}

export default App;
