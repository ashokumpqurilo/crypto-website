import React from 'react'

const ApiReferenceAuthentication = () => {
  return (
    <div className="p-8 w-[80%]">
      <h1 className="text-5xl font-bold mb-8">Authentication</h1>
      
      <p className="text-gray-700 mb-6">
        The SwarmNode API uses API keys for authentication. Visit your{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">
          API keys
        </a>
        {' '}page to generate an API key.
      </p>

      <p className="text-gray-700 mb-6">
        Include your API key in the Authorization HTTP header for every API request, as outlined below:
      </p>

      <div className="bg-gray-50 p-4 rounded-lg shadow-sm font-mono text-sm">
        Authorization: Bearer YOUR_API_KEY
      </div>
    </div>
  )
}

export default ApiReferenceAuthentication 