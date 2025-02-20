import React from "react";
import MarketplaceSidebarCommon from "../Layout/marketplaceSidebar";

const VectorStore = () => {
  return (
    <>
      <MarketplaceSidebarCommon>
        <div className="p-10">

        <div className="flex items-center justify-between mb-4 gap-6 shadow-lg rounded-xl bg-gray-100 p-10">
          <div className="w-[45%]">
            <label className="block mb-1 font-medium">Name *</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-gray-200"
            />
          </div>
        </div>
        <div className="flex justify-end mb-4 gap-6 shadow-lg rounded-xl bg-gray-100 p-4 mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Create
          </button>
        </div>
        </div>
      </MarketplaceSidebarCommon>
    </>
  );
};

export default VectorStore;
