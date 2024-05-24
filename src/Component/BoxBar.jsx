import React from "react";
import { BloodSugarGraph } from "../assets/icon";

export default function BoxBar({ text, unit, smallText, img,wrapperClass, innerClass }) {
  return (
    <div className={`shadow-md bg-white px-5 pt-4 m-3 rounded-lg border border-slate-100 ${wrapperClass}`}>
      <div className="flex justify-between">
        <div className="w-12 p-4 bg-[#f8debd]  rounded-2xl mr-4">{img}</div>
        <h2 className="text-center flex items-center text-lg">{text}</h2>
      </div>
      <div className="my-1">
        <p className={`py-2 text-2xl`}>
          {unit} <span className={`text-base text-[#898989]`}>mg / dl</span>
        </p>
        <h3 className={`p-1 w-16  rounded-md ${innerClass}`}>{smallText}</h3>
      </div>
      <BloodSugarGraph />
    </div>
  );
}
