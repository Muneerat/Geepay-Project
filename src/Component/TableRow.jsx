import React from "react";
import Modals from "./Modal";

export default function TableRow({
  name,
  date,
  amount,
  status,
  children,
  statusClass,
  imagePath
}) {
  return (
    <tr className=" bg-white border-3 dark:border-gray-200 hover:bg-gray-100">
      <th scope="row" className="flex items-center px-6 py-4 whitespace-nowrap">
        <img
          className="w-10 h-10 rounded-full"
          src={imagePath}
          alt="Jese image"
        />
        <div className="ps-3">
          <div className="text-base font-semibold">{name}</div>
        </div>
      </th>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4 font-semibold">{amount}</td>
      <td className={`px-6 py-4 text-blue-700 ${statusClass}`}>{status}</td>
      <td className="px-6 py-4">
        <Modals>{children}</Modals>
      </td>
    </tr>
  );
}
