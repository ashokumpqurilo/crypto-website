import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";


const ListAllAgentExecutorJobs = () => {
  const schemaData = {
    title: "List all agent executor jobs",
    request: {
      queryParameters: [{ name: "agent_id", type: "uuid" , required: true }],
      type: "Query Parameters",
     
    },
    response:
      {
        status:200,
        description:"Success"
      },
    method: "GET",
    endpoint: "https://api.swarmnode.ai/v1/agent-executor-jobs/",
    description: "Returns a list of agent executor cron jobs. Can be filtered by.",
    descriptionCode:"agent_id",
    code: `{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "agent_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "execution_address": "string",
      "created": "2024-12-28T11:16:10.047Z"
    }
  ]
}`,
mainFields: [
  
  { name: 'next', type: 'uri', nullable: true },
  { name: 'previous', type: 'uri', nullable: true },
],
results: {
  type: 'object[]',
  fields: [
    { name: 'id', type: 'uuid', required: true },
    { name: 'agent_id', type: 'uuid', required: true },
   
    { name: 'execution_address', type: 'string', required: true },
    { name: 'created', type: 'date-time', required: true }
  ],
}
    
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

export default ListAllAgentExecutorJobs;
