import React from "react";
import ApiSidebar from "../ApiReference/api-sidebar";

const ApiCommonSidebar = ({ children }) => {
  return (
    <>
      <div className="flex gap-2">
        <div className="w-64 h-screen bg-gray-200 text-white p-4">
          <ApiSidebar />
        </div>
        <div className="w-[calc(100%-256px)]">{children}</div>
      </div>
    </>
  );
};

export default ApiCommonSidebar;
