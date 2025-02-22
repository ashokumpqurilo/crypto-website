import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";

const ListAllExecutions = () => {
  const schemaData = {
    description: "Returns a list of executions. Can be filtered by  ",
    descriptionCode:"agent_id",
    title: "List all executions",
    method: "GET",
    response: {
      status: 200,
      description: "Success",
    },
    endpoint: "https://api.swarmnode.ai/v1/executions/",
    code: `{
  "next": "string",
  "previous": "string",
  "results": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "agent_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "agent_executor_job_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "agent_executor_cron_job_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "status": "success",
      "start": "2024-12-28T11:16:10.053Z",
      "finish": "2024-12-28T11:16:10.053Z",
      "logs": {},
      "return_value": {}
    }
  ]
}`,
request: {
    queryParameters: [{ name: "agent_executor_cron_job_id", type: "uuid" },
        { name: "agent_executor_job_id", type: "uuid" },
        { name: "agent_id", type: "uuid" },
      
    ],
    type: "QUERY PARAMETERS",
    
    
  },
    mainFields: [
      { name: "next", type: "string", nullable: true  },
      { name: "previous", type: "string", nullable: true },
    ],
    results: {
      type: "object[]",
      fields: [
        { name: "id", type: "uuid", required: true },
        { name: "agent_id", type: "uuid", required: true },
        { name: "agent_executor_job_id", type: "uuid", required: true , nullable:true},
        { name: "agent_executor_cron_job_id", type: "uuid", required: true , nullable:true},
        
        {
          name: "status",
          type: "string",
          required: true,
          options: [
              { value: "success ", label: "Suspended" },
              { value: "in_progress  ", label: "Running" },
              { value: "failed  ", label: "Failed" },
              { value: "termination   ", label: "Termination" },

          ],
        },
        { name: "start", type: "date-time", required: true },
        { name: "finish", type: "date-time", required: true },
        
      ],
      
     
      
    },
    data:{
        type:"object", required:true,
        fields:[
        ]
      }
   
  };
  
  const type = "QUERY PARAMETERS";
  return (
    <div className="flex w-[80%] ">
      <Schema schemaData={schemaData} />

      <RightSide />
    </div>
  );
};

export default ListAllExecutions;
