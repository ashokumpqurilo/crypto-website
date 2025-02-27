import React from "react";
import { div } from "framer-motion/client";
import MarketplaceSidebarCommon from "../Layout/marketplaceSidebar";
import LineGraph from "./LineGraph";
import WeeklyGraph from "./WeeklyGraph";

const Dashboard = () => {
  return (
    <MarketplaceSidebarCommon>
      <div className="flex flex-col gap-6 bg-[#EDF2F9] p-4 sm:p-6 lg:p-10 min-h-screen">
        <div className="w-full">
          <LineGraph />
        </div>

        <div className="flex gap-4 flex-wrap w-full">
          <div className="bg-white p-6 rounded-lg flex-1 shadow-sm min-w-[250px]">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-600 mb-1">Agents</h3>
                <p className="text-3xl font-semibold text-blue-500">0</p>
              </div>
              <button className="flex items-center gap-1 text-blue-500 border border-blue-500 px-3 py-1 rounded hover:bg-blue-50">
                <span>+</span>
                <span>Create</span>
              </button>
            </div>
            <a
              href="#"
              className="text-blue-500 text-sm mt-4 inline-block hover:underline"
            >
              View &gt;
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg flex-1 shadow-sm min-w-[250px]">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-600 mb-1">Stores</h3>
                <p className="text-3xl font-semibold text-blue-500">1</p>
              </div>
              <button className="flex items-center gap-1 text-blue-500 border border-blue-500 px-3 py-1 rounded hover:bg-blue-50">
                <span>+</span>
                <span>Create</span>
              </button>
            </div>
            <a
              href="#"
              className="text-blue-500 text-sm mt-4 inline-block hover:underline"
            >
              View &gt;
            </a>
          </div>
        </div>

        <div className="w-full">
          <WeeklyGraph />
        </div>
      </div>
    </MarketplaceSidebarCommon>
  );
};

export default Dashboard;
