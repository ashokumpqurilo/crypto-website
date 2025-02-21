import React from "react";
import MarketplaceSidebarCommon from "../Layout/marketplaceSidebar";
import { useNavigate } from "react-router-dom";

const stores = [
  { name: "agent", created: "Feb 20, 06:19" },
  { name: "agent", created: "Feb 20, 07:54" },
];

const MyVectorStore = () => {
    const navigate = useNavigate()
  return (
    <MarketplaceSidebarCommon>
    <div className="p-4 bg-gray-100 min-h-screen flex justify-center">
      <div className="w-full max-w-10xl bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Stores</h2>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
            onClick={() => navigate("/createStore")}
          >
            Create
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3">Name</th>
                <th className="p-3">Created</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 odd:bg-gray-100 hover:bg-gray-200"
                >
                  <td className="p-3 text-blue-600 font-medium cursor-pointer">{store.name}</td>
                  <td className="p-3 text-gray-700">{store.created}</td>
                  <td className="p-3">
                    <button className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-lg shadow">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <button className="border bg-gray-200 hover:bg-gray-300 text-black px-3 py-1 rounded-lg">&lt;</button>
          <button className="border bg-gray-200 hover:bg-gray-300 text-black px-3 py-1 rounded-lg">&gt;</button>
        </div>
      </div>
    </div>
  </MarketplaceSidebarCommon>

  );
};

export default MyVectorStore;