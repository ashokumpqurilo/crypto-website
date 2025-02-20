import React from 'react'

const ExecuteAnAgent = () => {
  return (
    <div className="bg-white p-6 " id="execute-agent">
      <h2 className="text-2xl font-bold mb-4">Execute an agent</h2>
      
      <p className="text-gray-700">
        After an agent is created, build process will start which will take a few seconds. Once the build is complete, you can execute the agent manually or schedule it for execution.
      </p>
    </div>
  )
}

export default ExecuteAnAgent