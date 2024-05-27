import React from 'react'
import BoxBar from "./BoxBar.jsx";
import { BloodPressure, BloodPressureGraph, BloodSugarIcon, Calories, CaloriesGraph, HeartGraph, HeartIcon } from "../assets/icon.jsx";
import { BloodSugarGraph } from "../assets/icon";

export default function BoxBars() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between m-1">
    <BoxBar
      text="Blood Sugar"
      unit="80"
      unitType="mg / dL"
      img={<BloodSugarIcon width={25} height={25} />}
      wrapperClass='bg-[#f8debd]'
      innerClass='bg-[#f8debd]'
      graphImg={<BloodSugarGraph />}
    />
    <BoxBar
      text="Blood Pressure"
      unit="102"
      unitType="/ 72 mmhg"
      img={<BloodPressure width={25} height={25} />}
      wrapperClass='bg-[#d0fbff]'
      innerClass='bg-[#d0fbff]'
      graphImg={<BloodPressureGraph />}
    />
     <BoxBar
      text="Calories Burned"
      unit="408"
      unitType="kcal"
      img={<Calories width={25} height={25}/>}
      wrapperClass='bg-[#71ddb1]'
      innerClass='bg-[#71ddb1]'
      graphImg={<CaloriesGraph />}
    />
    <BoxBar
      text="Heart Rate"
      unit="98"
      unitType="bpm"
      img={<HeartIcon width={25} height={25}/>}
      wrapperClass='bg-[#fbf0f3]'
      innerClass='bg-[#fbf0f3]'
      graphImg={<HeartGraph  />}
    />
   
  </div>
  )
}
