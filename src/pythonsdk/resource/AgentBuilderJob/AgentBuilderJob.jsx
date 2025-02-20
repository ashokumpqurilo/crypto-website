import React from 'react'
import CodeBlock from '../../../common/CodeBlock';

const AgentBuilderJob = () => {
    return (
        <div className="bg-white text-black p-8 min-h-screen">
          <h1 className="text-5xl font-bold">The AgentBuilderJob object</h1>
           
          <div className="mt-6">
             
            <div className="  p-4 rounded mt-2">
            <CodeBlock
              content={`class AgentBuilderJob:
    id: str
    agent_id: str
    created: str`}
            />
             </div>
          </div>
          
        </div>
      );
}

export default AgentBuilderJob