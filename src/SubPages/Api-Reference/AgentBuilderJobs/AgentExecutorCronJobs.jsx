import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";


const ListAgentBuilderJobs = () => {
  const schemaData = {
    description: "Retrieve an agent builder job by its ID.",
    descriptionCode: "agent_id",
    request: {
      queryParameters: [{ name: "agent_id", type: "uuid" }],
      type: "QUERY PARAMETERS",
      
    },
    response:
      {
        status:200,
        description:"Success"
      }
    ,
    title: "List all agent builder jobs",
    method: "GET",
    endpoint: "https://api.swarmnode.ai/v1/agent-builder-jobs/",
    code: `{
  "total_count": 123,
  "current_page": 1,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "agent_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "created": "2024-12-28T11:16:10.040Z"
    }
  ]
}`,
    mainFields: [
      { name: "total_count", type: "integer" },
      { name: "current_page", type: "integer" },
      { name: "next", type: "uri", nullable: true },
      { name: "previous", type: "uri", nullable: true },
    ],
    results: {
      type: "object[]",
      fields: [
        { name: "id", type: "uuid", required: true },
        { name: "agent_id", type: "uuid", required: true },
        { name: "name", type: "string", required: true },
        {
          name: "status",
          type: "string",
          required: true,
          options: [
            { value: "suspended", label: "Suspended" },
            { value: "running", label: "Running" },
          ],
        },
        { name: "expression", type: "string", required: true },
        { name: "execution_stream_address", type: "string", required: true },
        { name: "created", type: "date-time", required: true },
        { name: "modified", type: "date-time", required: true },
      ],
    },
  };
  return (
    <div className="flex w-[80%] " >
        <Schema schemaData={schemaData} />
        <RightSide />
    </div>
  );
};

export default ListAgentBuilderJobs;
