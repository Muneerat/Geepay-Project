import React from "react";

export default function Payment({
  amount,
  status,
  className
}) {
  return (
    <div>
      <div className="flex justify-between py-4">
        <div>Payment Status:</div>
        <div className={`text-blue-600 ${className}`}>{status}</div>
      </div>
      <div className="flex justify-between">
        <div>Amount</div>
        <div className="">{amount}</div>
      </div>
    </div>
  );
}
