import React from "react";
import CodeBlock from "../../../common/CodeBlock";

const AgentExecutorJob = () => {
  return (
    <div className="bg-white text-black p-8 min-h-screen">
      <h1 className="text-5xl font-bold">The AgentExecutorJob object</h1>

      <div className="mt-6">
        <div className="  p-4 rounded mt-2">
          <CodeBlock
            content={`class AgentExecutorJob:
    id: str
    agent_id: str
    execution_address: str
    created: str`}
          />
        </div>
      </div>
       
    </div>
  );
};

export default AgentExecutorJob;
