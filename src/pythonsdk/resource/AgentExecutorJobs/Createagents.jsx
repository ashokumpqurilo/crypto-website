import React from "react";
import CodeBlock from "../../../common/CodeBlock";

const Createagentexecutors = () => {
  return (
    <div className="bg-white text-white min-h-screen p-10">
      <h1 className="text-3xl text-black font-bold mb-6">
        Create an agent executor job
      </h1>

      <div className="bg-gray-800 p-4 rounded-lg">
        <CodeBlock
          content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

swarmnode.AgentExecutorJob.create(
    agent_id="15d19ca3-26f1-4adb-9cea-3955b73d9b4e",
    payload={"foo": "bar"},
)`}
        />
      </div>

      <p className="mt-4 text-blue-400">
        Returns a <span className="text-indigo-400">PagePaginatedResource</span>{" "}
        object.
      </p>

      <p className="mt-2 text-black">
        By creating an agent executor job, agent with given agent_id will be
        executed. payload is an optional parameter that can be used to pass data
        to the agent. The agent can access the payload via the request
        parameter:
      </p>
      <div className="  rounded-lg mt-5">
        <CodeBlock
          content={`def main(request, store):
    print(request.payload["foo"])  # prints "bar"")
    
    `}
        />
      </div>
    </div>
  );
};

export default Createagentexecutors;
