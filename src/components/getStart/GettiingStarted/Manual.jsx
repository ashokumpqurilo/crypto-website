import React from 'react';
import CodeBlock from '../../../common/CodeBlock';

const Manual = () => {
  return (
    <div className="bg-white p-6 " id="manual">
      <h2 className="text-2xl font-bold mb-4">Manual</h2>
      
      <p className="mb-4 text-gray-700">
        Often, it's useful to execute an agent programmatically. You can do so via{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">REST API</a> and{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">Python SDK</a>.
      </p>

      <p className="mb-4 text-gray-700">
        Here's how you can execute an agent via Python SDK:
      </p>

      <CodeBlock content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

agent = swarmnode.Agent.retrieve(id="AGENT_ID")
execution = agent.execute()`} />

      <p className="mt-4 text-gray-700">
        You can copy the agent's ID from the UI.
      </p>
    </div>
  );
};

export default Manual;