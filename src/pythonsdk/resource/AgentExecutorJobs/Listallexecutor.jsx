import React from 'react'
import CodeBlock from '../../../common/CodeBlock';

const Listallexecutor = () => {
    return (
        <div className="bg-white text-white min-h-screen p-10">
          <h1 className="text-3xl text-black font-bold mb-6">
          List all agent executor jobs

          </h1>
    
          <div className="bg-gray-800 p-4 rounded-lg">
            <CodeBlock
              content={`
    import swarmnode
    
    swarmnode.api_key = "YOUR_API_KEY"
    
    swarmnode.AgentExecutorCronJob.list()`}
            />
          </div>
    
          <p className="mt-4 text-blue-400">
            Returns a <span className="text-indigo-400">CursorPaginatedResource</span>{" "}
            object.
          </p>
    
          <h2 className="text-2xl font-bold mt-8  text-black">Filtering</h2>
          <p className="mt-2 text-black">
            You can filter the results by{" "}
            <span className="bg-gray-700 px-2 py-1 rounded text-sm text-white">
              agent_id
            </span>
            :
          </p>
          <div className="  rounded-lg mt-5">
            <CodeBlock
              content={`swarmnode.AgentExecutorCronJob.list(agent_id="ef14f43e-02fc-4b78-902b-9b37b485d3a1")
    
    `}
            />
          </div>
        </div>
      );
}

export default Listallexecutor