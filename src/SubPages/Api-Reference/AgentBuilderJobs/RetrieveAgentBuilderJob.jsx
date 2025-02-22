import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";


const RetrieveAgentBuilderJob = () => {
  const schemaData = {
    title: "Retrieve an agent builder job",
    method: "GET",
    request: {
      queryParameters: [{ name: "id", type: "uuid" }],
      type: "QUERY PARAMETERS",
      
    },
    response: {
      status: 200,
      description: "Success",
    },
    endpoint: "https://api.swarmnode.ai/v1/agent-builder-jobs/:id/",
    description: "Returns an agent builder job for a valid ID.",
    code: `{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "agent_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "created": "2024-12-28T11:16:10.042Z"
}
    `,
    mainFields: [
      { name: "id", type: "uuid", required: true },
      { name: "agent_id", type: "uuid", required: true },
      { name: "created", type: "date-time", required: true },
    ],
  };
  return (
    <div className="flex w-[80%] ">
      <Schema schemaData={schemaData} />
      <RightSide />
    </div>
  );
};

export default RetrieveAgentBuilderJob;
