import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";

const ListAllBuilds = () => {
  const schemaData = {
    description: "Returns a list of builds.",
    // descriptionCode:"agent_id",
    title: "List all builds",
    method: "GET",

    response: {
      status: 200,
      description: "Success",
    },
    endpoint: "https://api.swarmnode.ai/v1/builds/",
    code: `{
  "total_count": 123,
  "current_page": 1,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "agent_builder_job_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "status": "success",
      "logs": {},
      "created": "2024-12-28T11:16:10.051Z"
    }
  ]
}`,
    request: {
      queryParameters: [{ name: "agent_builder_job_id", type: "uuid" }],
      type: "QUERY PARAMETERS",
     
    },
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
        { name: "agent_builder_job_id", type: "uuid", required: true },
        {
          name: "status",
          type: "string",
          required: true,
          options: [
            { value: "success", label: "Success" },
            { value: "in_progress", label: "In Progress" },
            { value: "failed", label: "Failed" },
          ],
        },
        { name: "created", type: "date-time", required: true , logs:{
            type:"object",
            
        }},
        
      ],
      
    },
    logs:{
        type:"object",
        fields:[
        ]
      }
  };
  
  return (
    <div className="flex w-[80%] ">
      <Schema schemaData={schemaData} />

      <RightSide />
    </div>
  );
};

export default ListAllBuilds;
