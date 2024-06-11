import { Modal } from "@nextui-org/react";
import React from "react";
import Modals from "./Modal";
import Payment from "./Payment";
import TableRow from "./TableRow";

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
          <TableRow
            name="Corey Schleifer"
            date="Jul 15, 2024"
            amount="$80,000"
            status="paid"
            imagePath='https://i.pravatar.cc/150?u=a042581f4e29026024d'
          >
            <Payment amount="$80,000" status="paid" />
          </TableRow>
          <TableRow
            name="Marcus Bergson"
            date="Jul 15, 2024"
            amount="$150,000"
            status="Refund"
            statusClass="text-red-700"
            imagePath='https://i.pravatar.cc/150?u=a042581f4e29026024d'
          >
            <Payment amount="$150,000" status="Refund" className="text-red-700" />
          </TableRow>
          <TableRow
            name="Jaydon Vaccaro"
            date="Jul 15, 2024"
            amount="$87,000"
            status="paid"
            imagePath='https://i.pravatar.cc/150?u=a04258114e29026302d'
          >
            <Payment amount="$87,000" status="paid" />
          </TableRow>
          <TableRow
            name="Phillip Lubin"
            date="Jul 10, 2024"
            amount="$78,000"
            status="Refund"
            statusClass="text-red-700"
            imagePath='https://i.pravatar.cc/150?u=a04258114e29026302d'
          >
            <Payment amount="$78,000" status="Refund" className="text-red-500" />
          </TableRow>
          <TableRow
            name="Cooper Press"
            date="Jul 18, 2024"
            amount="$107,000"
            status="paid"
            imagePath='https://i.pravatar.cc/150?u=a04258a2462d826712d'
          >
            <Payment amount="$107,000" status="paid" />
          </TableRow>
        </tbody>
      </table>
    </div>
  );
}
