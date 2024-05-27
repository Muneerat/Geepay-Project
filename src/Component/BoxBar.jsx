import React from "react";


export default function BoxBar({ text, unit, unitType, img,wrapperClass, innerClass,graphImg }) {
  return (
    <div className={`shadow-md bg-white px-5 pt-4 m-3 rounded-lg border border-slate-100 `}>
      <div className="flex justify-between">
        <div className={`w-12 p-4   rounded-2xl mr-4 flex justify-center ${wrapperClass}`}>{img}</div>
        <h2 className="text-center flex items-center text-lg">{text}</h2>
      </div>
      <div className="my-1">
        <p className={`py-2 text-2xl`}>
          {unit} <span className={`text-base text-[#898989]`}>{unitType} </span>
        </p>
        <h3 className={`p-1 w-16  rounded-md ${innerClass}`}>Normal</h3>
      </div>
      <div>{graphImg}</div>
    </div>
  );
}
