import React from 'react'
import CodeBlock from '../../../common/CodeBlock';

const AgentRetrieveanagent = () => {
    return (
        <div className="bg-white text-black p-8 min-h-screen">
          <h1 className="text-5xl font-bold">Retrieve an agent</h1>
    
          <div className="mt-6">
            <div className="  p-4 rounded mt-2">
              <CodeBlock
                content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

swarmnode.Agent.list()`}
              />
            </div>
          </div>
          <p className="mb-7 ">
          Returns a AgentExecutorJob object.
            </p>
        </div>
      );
}

export default AgentRetrieveanagent