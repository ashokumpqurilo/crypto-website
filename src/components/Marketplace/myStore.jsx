import React from "react";
import MarketplaceSidebarCommon from "../Layout/marketplaceSidebar";
import { useNavigate } from "react-router-dom";

const stores = [
  { name: "agent", created: "Feb 20, 06:19" },
  { name: "agent", created: "Feb 20, 07:54" },
];

const MyStore = () => {
    const navigate = useNavigate()
  return (
    <MarketplaceSidebarCommon>
    <div className="p-4 bg-gray-100  h-screen flex  justify-center">
      <div className="w-full bg-gray-200 rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-black">Stores</h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" onClick={()=>navigate("/createStore")}>Create</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-black">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="p-2">Name</th>
                <th className="p-2">Created</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {stores.map((store, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="p-2 text-blue-400 cursor-pointer">{store.name}</td>
                  <td className="p-2">{store.created}</td>
                  <td className="p-2">
                    <button className="bg-red-300 hover:bg-red-600 text-black px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <button className="border bg-gray-100 text-black px-3 py-1 rounded-lg">&lt;</button>
          <button className="border bg-gray-100 text-black px-3 py-1 rounded-lg">&gt;</button>
        </div>
      </div>
    </div>
    </MarketplaceSidebarCommon>

  );
};

export default MyStore;