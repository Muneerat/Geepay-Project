import { Modal } from "@nextui-org/react";
import React from "react";
import Modals from "./Modal";
import Payment from "./Payment";

export default function Table() {
  return (
    <div className="w-full lg:w-[66%] relative overflow-x-auto shadow-lg sm:rounded-lg ml-4">
      <table className=" w-full text-sm text-left rtl:text-right text-black/60">
        <thead className="text-xs text-black/70 uppercase bg-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Invoice
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className=" bg-white border-3 dark:border-gray-200 hover:bg-gray-100">
            <th
              scope="row"
              className="flex items-center px-6 py-4 whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">Corey Schleifer</div>
              </div>
            </th>
            <td className="px-6 py-4">Jul 15, 2023</td>
            <td className="px-6 py-4 font-semibold">$80,000</td>
            <td className="px-6 py-4 text-blue-700">Paid</td>
            <td className="px-6 py-4">
             <Modals >
              <Payment amount='89' status='paid' className="text-red-500"/>
             </Modals>
            </td>
          </tr>  
          <tr className=" bg-white border-3 dark:border-gray-200 hover:bg-gray-100">
            <th
              scope="row"
              className="flex items-center px-6 py-4 whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">Corey Schleifer</div>
              </div>
            </th>
            <td className="px-6 py-4">Jul 15, 2023</td>
            <td className="px-6 py-4 font-semibold">$80,000</td>
            <td className="px-6 py-4 text-red-700">Refund</td>
            <td className="px-6 py-4">
              <Modals />
            </td>
          </tr>
          <tr className=" bg-white border-3 dark:border-gray-200 hover:bg-gray-100">
            <th
              scope="row"
              className="flex items-center px-6 py-4 whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">Corey Schleifer</div>
              </div>
            </th>
            <td className="px-6 py-4">Jul 15, 2023</td>
            <td className="px-6 py-4 font-semibold">$80,000</td>
            <td className="px-6 py-4 text-blue-700">Paid</td>
            <td className="px-6 py-4">
            <Modals />
            </td>
          </tr>  
          <tr className=" bg-white border-3 dark:border-gray-200 hover:bg-gray-100">
            <th
              scope="row"
              className="flex items-center px-6 py-4 whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">Corey Schleifer</div>
              </div>
            </th>
            <td className="px-6 py-4">Jul 15, 2023</td>
            <td className="px-6 py-4 font-semibold">$80,000</td>
            <td className="px-6 py-4 text-red-700">Refund</td>
            <td className="px-6 py-4">
            <Modals />
            </td>
          </tr>
        
        </tbody>
      </table>
    </div>
  );
}
