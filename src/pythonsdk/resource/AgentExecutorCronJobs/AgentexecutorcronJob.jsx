import React from "react";
import CodeBlock from "../../../common/CodeBlock";

const AgentexecutorcronJob = () => {
  return (
    <div className="bg-white text-black p-8 min-h-screen">
      <h1 className="text-5xl font-bold">Retrieve an agent builder job</h1>

      <div className="mt-6">
        <div className="  p-4 rounded mt-2">
          <CodeBlock
            content={`class AgentExecutorCronJob:
    id: str
    agent_id: str
    name: str
    status: Literal["suspended", "running"]
    expression: str
    execution_stream_address: str
    created: str
    modified: str`}
          />
        </div>
      </div>
      <p className="mb-7 ">expression is a cron expression. You can use crontab.guru to help you generate it.</p>
    </div>
  );
};

export default AgentexecutorcronJob;
