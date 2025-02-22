import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";



const ListAgents = () => {
  const schemaData = {
    title: "List all stores",
    request: {
   
      type: "Query Parameters",
     
    },
    response:
      {
        status:200,
        description:"Success"
      },
    method: "GET",
    endpoint: "https://api.swarmnode.ai/v1/stores/",
    description: "Returns a list of stores.",
    
    code: `{
 {
  "total_count": 123,
  "current_page": 1,
  "next": "http://api.example.org/accounts/?page=4",
  "previous": "http://api.example.org/accounts/?page=2",
  "results": [
    {
      "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      "name": "string",
      "data": {},
      "created": "2024-12-28T11:16:10.054Z"
    }
  ]
}`,
mainFields: [
    { name: 'total_count', type: 'integer' },
    { name: 'current_page', type: 'integer' },
  { name: 'next', type: 'uri', nullable: true },
  { name: 'previous', type: 'uri', nullable: true },
],
results: {
  type: 'object[]',
  fields: [
    { name: 'id', type: 'uuid', required: true },
    { name: 'name', type: 'string', required: true },
      
   
 {name :"created" , type:"date-time" , required : true},
   
  ],
  data:{
    type:"object",
    fields:[
        
    ]
}
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

export default ListAgents;
