import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";


const QueryParameters = ({ type, parameters }) => {
  const [isQueryParamsOpen, setIsQueryParamsOpen] = useState(true);

  return (
    <div className="bg-white rounded-lg px-4 pb-8">
      <button
        onClick={() => setIsQueryParamsOpen(!isQueryParamsOpen)}
        className="w-full flex items-center gap-2 text-sm font-semibold"
      >
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isQueryParamsOpen ? "transform rotate-0" : "transform -rotate-90"
          }`}
        />
        <span className="capitalize">{type}</span>
      </button>

      {isQueryParamsOpen && (
        <div className="mt-4 pl-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          {parameters.map((param, index) => (
            <div
              key={index}
              className="flex items-center gap-3 w-full justify-between"
            >
              <div className="flex items-center gap-3">
                <code className="font-mono relative">
                  <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                  {param.name}
                </code>
                <span className="text-gray-500 text-sm">{param.type}</span>
              </div>
              {param.required && (
                <span className="text-red-500 text-xs">REQUIRED</span>
              )}
              {param.nullable && (
                <span className="text-[#0EA5E9] text-xs">NULLABLE</span>
              )}
            </div>
          ))} 
        </div>
      )}
    </div>
  );
};
const UpdateAnAgentExecutorCronJob = () => {
  const schemaData = {
    title: "Update an agent executor cron job",
    request: {
        queryParameters: [{ name: "id", type: "uuid" , required: true }],
        type: "Path Parameters",
        body: {
          type: "BODY" , required: true,
          fields: [
            { name: "name", type: "string", required: true },
            {
              name: "status",
              type: "string",
              required: true,
              options: [
                { value: "suspended", label: " Suspended" },
                { value: "running", label: "Running" },
               
              ],
            },
          ],
        },
      },
    response:
      {
        status:200,
        description:"Success"
      }
    ,
    method: "PATCH",
    endpoint: "https://api.swarmnode.ai/v1/agent-executor-cron-jobs/:id/update/",
    description: "Updates an agent executor cron job.",
    descriptionCode:"agent_id",
    code: `{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "agent_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "string",
  "status": "suspended",
  "expression": "string",
  "execution_stream_address": "string",
  "created": "2024-12-28T11:16:10.044Z",
  "modified": "2024-12-28T11:16:10.044Z"
}`,
mainFields: [
    { name: 'id', type: 'uuid', required: true },
    { name: 'agent_id', type: 'uuid', required: true },
    { name: 'name', type: 'string', required: true },
    {
      name: 'status',
      type: 'string',
      required: true,
      options: [
        { value: 'suspended', label: 'Suspended' },
        { value: 'running', label: 'Running' },
      ],
    },
    { name: 'expression', type: 'string', required: true },
    { name: 'execution_stream_address', type: 'string', required: true },
    { name: 'created', type: 'date-time', required: true },
    { name: 'modified', type: 'date-time', required: true },
],

    
  };
 
  const type = "Path Parameters";
  return (
    <div className="flex w-[80%] ">
      <Schema
        
        schemaData={schemaData}
      />
      <RightSide />
    </div>
  );
};

export default UpdateAnAgentExecutorCronJob;
