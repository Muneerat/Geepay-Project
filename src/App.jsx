import React from "react";
import "./App.css";
import SideBar from "./Component/SideBar.jsx";
import Navbar from "./Component/Navbar.jsx";
// import useDarkMode from "use-dark-mode";
import BarChart from "./Component/BarChart.jsx";
import BoxBars from "./Component/BoxBars.jsx";
import Table from "./Component/Table.jsx";

function App() {
  // const darkMode = useDarkMode(false)
const test = "Yes Some of the reason I think it has demonstrated a positive impact on Cardano ecosystem is that I believe this talents, will enhance day-to-day activities in the ecosystem By providing tools for learning and upskilling And it’s can also be used to reduce stress and efficient to work for hiring of individuals This can also be used to make day today activity like collection of CV and other feedback online easier and interaction  with users easier."
console.log(test.trim())
  return (
    // ${darkMode.value ? 'dark' : ''}
    <div className={`  w-full flex bg-[#fffcf8] `}>
      <SideBar />
      <div className="w-full block">
        <Navbar />
        <div className="lg:flex w-full justify-center">
          <BarChart />
          <BoxBars />
        </div>
        <div className="flex justify-center w-4/5 m-auto items-center">
          <Table />
          <Table />
        </div>
    
      </div>
    </div>
  );
}

export default App;
