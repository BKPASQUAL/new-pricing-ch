import React from "react";

export default function ItemsCard() {
  return (
    <div className="w-64 bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src="https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Item Image"
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex justify-between">
        <h2 className="text-lg font-semibold mb-2">Item Name</h2>
        <p className="text-blue-500 font-bold text-xl">$99.99</p>
      </div>
    </div>
  );
}
