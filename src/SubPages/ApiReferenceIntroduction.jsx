import React from 'react'

const ApiReferenceIntroduction = () => {
  return (
    <div className="p-8  w-[80%]">
      <h1 className="text-5xl font-bold mb-8">Introduction</h1>
      
      <p className="text-gray-700 mb-6">
        The SwarmNode API is designed based on REST architecture, with predictably structured, resource-focused URLs. It uses 
        JSON for both its request bodies and response payloads, and follows established practices for HTTP response codes, 
        authentication, and verbs.
      </p>

      <p className="text-gray-700 mb-6">
        Alternatively, you can use the{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">
          SwarmNode Python SDK
        </a>
        {' '}to interact with the API.
      </p>

      <p className="text-gray-700">
        Download OpenAPI spec{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">
          here
        </a>.
      </p>
    </div>
  )
}

export default ApiReferenceIntroduction 