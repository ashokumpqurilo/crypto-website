import React from "react";
import MarketplaceSidebar from "../Marketplace/Marketplace-sidebar";

const MarketplaceSidebarCommon = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="border-r border-gray-700 ">
          <MarketplaceSidebar />
        </div>
        <div className="w-[calc(100%-256px)]">{children}</div>
      </div>
    </>
  );
};

export default MarketplaceSidebarCommon;
