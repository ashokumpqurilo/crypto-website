import React from 'react';
import CodeBlock from '../../../common/CodeBlock';

const Payload = () => {
  return (
    <div className="bg-white p-6 " id="payload">
      <h2 className="text-2xl font-bold mb-4">Payload</h2>
      
      <p className="mb-4 text-gray-700">
        <code className="bg-gray-100 px-1 rounded">payload</code> is a any JSON-serializable value that was passed to the execution via{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">REST API</a> or{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">Python SDK</a>:
      </p>

      <p className="mb-4 text-gray-700">
        Here's how to pass a payload via the SDK:
      </p>

      <CodeBlock content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

agent = swarmnode.Agent.retrieve(id="AGENT_ID")
execution = agent.execute(payload={"foo": "bar"})`} />

      <p className="my-4 text-gray-700">
        Here's how to access the payload from the script:
      </p>

      <CodeBlock content={`def main(request, store):
    print(request.payload)  # prints {"foo": "bar"}`} />
    </div>
  );
};

export default Payload; 