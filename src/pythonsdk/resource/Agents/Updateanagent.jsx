import React from 'react'
import CodeBlock from '../../../common/CodeBlock';

const Updateanagent = () => {
    return (
        <div className="bg-white text-black p-8 min-h-screen">
          <h1 className="text-5xl font-bold">Update an agent


          </h1>
    
          <div className="mt-6">
            <div className="  p-4 rounded mt-2">
              <CodeBlock
                content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

swarmnode.Agent.update(
    id="15d19ca3-26f1-4adb-9cea-3955b73d9b4e",
    name="Updated name",
    script="def main(request, store):\n    return 'Hello!'",
    requirements="requests==2.31.0",
    env_vars="FOO=bar",
    python_version="3.10",
)`}
              />
            </div>
          </div>
          <p className="mb-7 ">
          Returns a AgentExecutorJob object.
            </p>
        </div>
      );
}

export default Updateanagent