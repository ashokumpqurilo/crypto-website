import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";


const DeleteAgents = () => {
  const schemaData = {
    title: "Delete an agent",
    request: {
      queryParameters: [{ name: "id", type: "uuid" , required: true }],
      type: "Path Parameters",
     
    },
    response:
      {
        status:204,
        description:""
      },
    method: "DELETE",
    endpoint: "https://api.swarmnode.ai/v1/agents/:id/delete/",
    description: "Delete an agent..",
    
   
mainFields: [
   
],

    
  };
  return (
    <div className="flex w-[80%] ">
      <Schema
        schemaData={schemaData}
      />
      <RightSide />
    </div>
  );
};

export default DeleteAgents;
