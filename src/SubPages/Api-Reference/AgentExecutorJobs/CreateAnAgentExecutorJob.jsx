import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";


const CreateAnAgentExecutorJob = () => {
  const schemaData = {
    title: "Create an agent executor job",
    request: {
        
        body: {
          type: "BODY" ,required: true,
          fields: [
            { name: "agent_id", type: "uuid", required: true },
            
          ],
        },
        payload:{
          type:"object",
          fields:[
              
          ]
      }
      },
    response:
      {
        status:200,
        description:"Success"
      },
    method: "POST",
    endpoint: "https://api.swarmnode.ai/v1/agent-executor-jobs/create/",
    description: "Creates an agent executor job.",
  
    code: `
    {
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "agent_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "execution_address": "string",
  "created": "2024-12-28T11:16:10.048Z"
}
 `,
mainFields: [
  
  { name: 'id', type: 'uuid', required: true },
  { name: 'agent_id', type: 'uuid', required: true },
 
  { name: 'execution_address', type: 'string', required: true },
  { name: 'created', type: 'date-time', required: true }
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

export default CreateAnAgentExecutorJob
