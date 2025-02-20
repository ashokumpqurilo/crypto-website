import React from 'react'
import CodeBlock from '../../../common/CodeBlock';

const Executeanagent = () => {
    return (
        <div className="bg-white text-white min-h-screen p-10">
          <h1 className="text-3xl text-black font-bold mb-6">
          Execute an agent

          </h1>
    
          <div className="bg-gray-800 p-4 rounded-lg">
            <CodeBlock
              content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

agent = swarmnode.Agent.retrieve(id="15d19ca3-26f1-4adb-9cea-3955b73d9b4e")

agent.execute(wait=True, payload={"foo": "bar"})`}
            />
          </div>
    
          <p className="mt-4 text-blue-400">
          If wait is set to True, the method will wait for the agent to finish executing and return a Execution object. If wait is set to False, the method will return a AgentExecutorJob object immediately.
          </p>
    
          <h2 className="text-2xl font-bold mt-8  text-black">Filtering</h2>
          <p className="mt-2 text-black">
          payload is an optional parameter that can be used to pass data to the agent. The agent can access the payload via the request parameter:            <span className="bg-gray-700 px-2 py-1 rounded text-sm text-white">
              agent_id
            </span>
            :
          </p>
          <div className="  rounded-lg mt-5">
            <CodeBlock
              content={`def main(request, store):
    print(request.payload["foo"]) ")
    
    `}
            />
          </div>
        </div>
      );
}

export default Executeanagent