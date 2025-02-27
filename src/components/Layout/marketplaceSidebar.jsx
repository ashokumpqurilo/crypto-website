import React, { useState } from "react";
import MarketplaceSidebar from "../Marketplace/Marketplace-sidebar";

const MarketplaceSidebarCommon = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
  
  return (
    <>
      <div className="flex">
        <div className="border-r border-gray-400 ">
          <MarketplaceSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        </div>
        <div className={`w-full ${isCollapsed ?"w-[calc(100%-64px)]":"lg:w-[calc(100%-256px)]"} ml-16 lg:ml-0 `}>{children}</div>
      </div>
    </>
  );
};

export default MarketplaceSidebarCommon;
