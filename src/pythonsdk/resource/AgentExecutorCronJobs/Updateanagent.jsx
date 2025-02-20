import React from "react";
import CodeBlock from "../../../common/CodeBlock";

const Updateanagent = () => {
  return (
    <div className="bg-white text-black p-8 min-h-screen">
      <h1 className="text-5xl font-bold">Retrieve an agent builder job</h1>

      <div className="mt-6">
        <div className="  p-4 rounded mt-2">
          <CodeBlock
            content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

swarmnode.AgentExecutorCronJob.update(
    id="15d19ca3-26f1-4adb-9cea-3955b73d9b4e",
    name="Updated name",
    status="suspended",
)`}
          />
        </div>
      </div>
      <p className="mb-7 ">
        expression is a cron expression. You can use crontab.guru to help you
        generate it.
      </p>
    </div>
  );
};

export default Updateanagent;
