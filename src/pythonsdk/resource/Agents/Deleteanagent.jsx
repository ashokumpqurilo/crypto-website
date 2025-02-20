import React from 'react'
import CodeBlock from '../../../common/CodeBlock';

const Deleteanagent = () => {
    return (
        <div className="bg-white text-black p-8 min-h-screen">
          <h1 className="text-5xl font-bold">Delete an agent
          </h1>
    
          <div className="mt-6">
            <div className="  p-4 rounded mt-2">
              <CodeBlock
                content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

swarmnode.Agent.delete(id="15d19ca3-26f1-4adb-9cea-3955b73d9b4e")`}
              />
            </div>
          </div>
           
        </div>
      );
}

export default Deleteanagent