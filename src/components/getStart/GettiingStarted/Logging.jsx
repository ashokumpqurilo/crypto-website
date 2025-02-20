import React from 'react';
import CodeBlock from '../../../common/CodeBlock';
const Logging = () => {
  return (
    <div className="bg-white p-6 " id="logging">
      <h2 className="text-2xl font-bold mb-4">Logging</h2>
      
      <p className="mb-4 text-gray-700">
        You can use the <code className="bg-gray-100 px-1 rounded">print</code> function to log messages. You can also use the <code className="bg-gray-100 px-1 rounded">logging</code> module:
      </p>

      <CodeBlock content={`import logging

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

handler = logging.StreamHandler()
handler.setLevel(logging.INFO)

logger.addHandler(handler)

def main():
    logger.info("From the logging module")
    print("From the print function")`} />

      <p className="my-4 text-gray-700">
        Logs can be viewed from the UI.
      </p>

      <p className="mb-4 text-gray-700">
        Logs can also be retrieved via{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">REST API</a> and{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">Python SDK</a>. Here's how to access logs via the SDK:
      </p>

      <CodeBlock content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

agent = swarmnode.Agent.retrieve(id="AGENT_ID")
execution = agent.execute()
print(execution.logs)`} />
    </div>
  );
};

export default Logging;
