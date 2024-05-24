import React from "react";
import { BloodSugarGraph } from "../assets/icon";

export default function BoxBar({ text, unit, smallText, img }) {
  return (
    <div className="shadow-md bg-white px-5 pt-4 m-3 rounded-lg border border-slate-100">
      <div className="flex justify-between">
        <div className="w-12 p-4 bg-[#f8debd]  rounded-2xl mr-4">{img}</div>
        <h2 className="text-center flex items-center text-lg">{text}</h2>
      </div>
      <div className="my-2">
        <p className={`py-1 text-xl`}>
          {unit} <span className="text-base">mg/dl</span>
        </p>
        <h3>{smallText}</h3>
      </div>
      <BloodSugarGraph />
    </div>
  );
}
