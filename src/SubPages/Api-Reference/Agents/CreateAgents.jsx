import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";


const CreateAgents = () => {
  const schemaData = {
    title: "Create an agent",
    request: {
   
        
      
        body: {
            type: "BODY" , required: true,
            fields: [
              { name: "name", type: "string", required: true },
              { name: "script", type: "string", required: true },
              { name: "requirements", type: "string", required: true },
              { name : "env_vars" , type :"String" , required: true},
              { name : "python_version" , type :"String" , required: true},

              {
        name: 'Possible values',
        type: 'string',
        required: true,
        options: [
          { value: '3.9', label: '3.9' },
          { value: '3.10', label: '3.10' },
          { value : "3.11" , label : "3.11"},
          { value : "3.12" , label : "3.12"},
        ],
      },
      {name :"store_id" , type:"uuid" , required : true},
            ],
          },
    },
    response:
      {
        status:200,
        description:"Success"
      },
    method: "POST",
    endpoint: " https://api.swarmnode.ai/v1/agents/create/",
    description: "Create an agent..",
    
    code: `{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "string",
  "script": "string",
  "requirements": "string",
  "env_vars": "string",
  "python_version": "3.9",
  "store_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "created": "2024-12-28T11:16:10.051Z",
  "modified": "2024-12-28T11:16:10.051Z"
}`,
mainFields: 
    [
        { name: 'id', type: 'uuid', required: true },
        { name: 'name', type: 'string', required: true },
        { name: 'script', type: 'string', required: true },
        
        { name: 'requirements', type: 'string', required: true },
        { name: 'env_vars', type: 'string', required: true },
        {name :"python_version" , type:"string" , required : true},
        
        
        {
            
            options: [
              { value: '3.9', label: '3.9' },
              { value: '3.10', label: '3.10' },
              { value : "3.11" , label : "3.11"},
              { value : "3.12" , label : "3.12"},
            ],
          },
          {name :"store_id" , type:"uuid" , required : true},
        {name :"created" , type:"date-time" , required : true},
        {name :"modified" , type:"date-time" , required : true},
      
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

export default CreateAgents;
