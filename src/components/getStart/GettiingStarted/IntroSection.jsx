import React from 'react'

const IntroSection = () => {
  return (
    <div className="py-6 px-6 " >
      <h1 className="text-5xl font-bold mb-8" id="getting-started">Getting started</h1>
      
      <div className="space-y-8">
        <p className="text-lg">
          SwarmNode enables you to run Python agents in the cloud without managing servers. An agent can either be scheduled for execution at specific times or executed manually via the UI, <a href="#" className="text-blue-400">REST API</a> and <a href="#" className="text-blue-400">Python SDK</a>.
        </p>

        <p className="text-lg">
          During an execution, every agent has access to a <a href="#" className="text-blue-400">persistent and dedicated storage</a> that can be used to store and retrieve data.
        </p>

        <div className="mt-12" id="create-agent">
          <h2 className="text-3xl font-bold mb-6">Create an agent</h2>
          <p className="text-lg">
            Agents can be created from the UI on <a href="https://app.swarmnode.ai/agents/create/" className="text-blue-400">app.swarmnode.ai/agents/create/</a> or via <a href="#" className="text-blue-400">REST API</a> and <a href="#" className="text-blue-400">Python SDK</a>. In the following sections, we will focus on the UI.
          </p>
        </div>

        <p className="text-lg">
          An agent consists of three key components: script, requirements, and environment variables.
        </p>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>Script is your Python script that will be executed.</li>
          <li>Requirements are the Python packages that your script depends on. For example, if your script uses the <code className="bg-gray-700 text-white px-2 py-1 rounded">requests</code> package, you need to add it to the requirements.</li>
          <li>Environment variables are the variables that your script can access during execution.</li>
        </ul>

        <p className="text-lg">
          Only script is required. Requirements and environment variables are optional.
        </p>
      </div>
    </div>
  )
}

export default IntroSection