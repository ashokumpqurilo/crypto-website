import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import LeftSidebar from "../components/Layout/Python/LeftSidebar";
import Schema from "../components/Resources/AgentExecutorCronJobs/Schema";
import RightSide from "../containers/RightSide/RightSide";
const AgentExecutorCronJobs = () => {
  return (
    <div className=" flex justify-end" style={{maxWidth: "100vw" , overflowX: "hidden"}}>
      <main className="flex max-w-[calc(100vw-300px)]  ">
        <Schema />
        <RightSide />
      </main> 
    </div>
  );
};

export default AgentExecutorCronJobs;
