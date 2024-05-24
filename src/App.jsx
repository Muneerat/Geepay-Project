import React from "react";
import "./App.css";
import SideBar from "./Component/SideBar.jsx";
import Navbar from "./Component/Navbar.jsx";
// import useDarkMode from "use-dark-mode";
import BarChart from "./Component/BarChart.jsx";
import BoxBar from "./Component/BoxBar.jsx";
import { BloodSugarIcon } from "./assets/icon.jsx";

function App() {
  // const darkMode = useDarkMode(false)

  return (
    // ${darkMode.value ? 'dark' : ''}
    <div className={`  w-full flex bg-[#fffcf8] `}>
      <SideBar />
      <div className="w-full block">
        <Navbar />
        <div className="flex justify-center">
          <BarChart />
          <div className="grid grid-cols-2 justify-between m-1">
            <BoxBar
              text="Blood Sugar"
              unit="80"
              smallText="Normal"
              img={<BloodSugarIcon />}
              innerClass='bg-[#f8debd]'
            />
            <BoxBar
              text="Blood Sugar"
              unit="80"
              smallText="Normal"
              img={<BloodSugarIcon />}
            />
            <BoxBar
              text="Blood Sugar"
              unit="80"
              smallText="Normal"
              img={<BloodSugarIcon />}
            />
            <BoxBar
              text="Blood Sugar"
              unit="80"
              smallText="Normal"
              img={<BloodSugarIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
