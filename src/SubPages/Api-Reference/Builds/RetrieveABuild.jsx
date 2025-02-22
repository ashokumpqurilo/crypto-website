import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";

const RetrieveABuild = () => {
  const schemaData = {
    description: "Returns a build for a valid ID.",
    // descriptionCode:"agent_id",
    title: "Retrieve a build",
    method: "GET",

    response: {
      status: 200,
      description: "Success",
    },
    endpoint: "https://api.swarmnode.ai/v1/builds/:id/",
    code: `{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "agent_builder_job_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "status": "success",
  "logs": {},
  "created": "2024-12-28T11:16:10.052Z"
}`,
    request: {
      queryParameters: [{ name: "id", type: "uuid", required: true }],
      type: "QUERY PARAMETERS",
     
    },
    mainFields: [
      { name: "id", type: "uuid", required: true },
      { name: "agent_builder_job_id", type: "uuid", required: true },
      { name: "status", type: "string", required: true },
      { name: "logs", type: "object", required: true, options: [
        { value: "success", label: "Success" },
        { value: "in_progress", label: "In Progress" },
        { value: "failed", label: "Failed" },
      ],},

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

export default RetrieveABuild;
