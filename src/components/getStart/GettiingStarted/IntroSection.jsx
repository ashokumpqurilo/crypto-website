import React from 'react'

const IntroSection = () => {
  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8" id="getting-started">Getting started</h1>
      
      <div className="space-y-6 sm:space-y-8">
        <p className="text-base sm:text-lg">
          SwarmNode enables you to run Python agents in the cloud without managing servers. An agent can either be scheduled for execution at specific times or executed manually via the UI, <a href="#" className="text-blue-500 hover:underline">REST API</a> and <a href="#" className="text-blue-500 hover:underline">Python SDK</a>.
        </p>

        <p className="text-base sm:text-lg">
          During an execution, every agent has access to a <a href="#" className="text-blue-500 hover:underline">persistent and dedicated storage</a> that can be used to store and retrieve data.
        </p>

        <div className="mt-10 sm:mt-12" id="create-agent">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Create an agent</h2>
          <p className="text-base sm:text-lg">
            Agents can be created from the UI on <a href="https://app.swarmnode.ai/agents/create/" className="text-blue-500 hover:underline">app.swarmnode.ai/agents/create/</a> or via <a href="#" className="text-blue-500 hover:underline">REST API</a> and <a href="#" className="text-blue-500 hover:underline">Python SDK</a>. In the following sections, we will focus on the UI.
          </p>
        </div>

        <p className="text-base sm:text-lg">
          An agent consists of three key components: script, requirements, and environment variables.
        </p>

        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-base sm:text-lg">
          <li>Script is your Python script that will be executed.</li>
          <li>Requirements are the Python packages that your script depends on. For example, if your script uses the <code className="bg-gray-700 text-white px-2 py-1 rounded">requests</code> package, you need to add it to the requirements.</li>
          <li>Environment variables are the variables that your script can access during execution.</li>
        </ul>

        <p className="text-base sm:text-lg">
          Only script is required. Requirements and environment variables are optional.
        </p>
      </div>
    </div>
  )
}

export default IntroSection
