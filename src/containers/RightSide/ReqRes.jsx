import React, { useState } from 'react'

const ReqRes = () => {
  const [isAllCollapsed, setIsAllCollapsed] = useState(false)
  const [sections, setSections] = useState({
    baseUrl: true,
    auth: true,
    parameters: true
  })
  const [response, setResponse] = useState('')

  const toggleAllSections = () => {
    const newState = !isAllCollapsed
    setIsAllCollapsed(newState)
    setSections({
      baseUrl: !newState,
      auth: !newState,
      parameters: !newState
    })
  }

  const toggleSection = (section) => {
    setSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  const handleClear = () => {
    setResponse('')
  }

  return (
    <div className="space-y-4 mb-10 w-full">
      <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-sm font-semibold text-gray-700">REQUEST</h2>
          <button 
            onClick={toggleAllSections}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            {isAllCollapsed ? 'EXPAND ALL' : 'COLLAPSE ALL'}
          </button>
        </div>

        <div className="space-y-4">
          {/* Base URL Section */}
          <div>
            <div 
              onClick={() => toggleSection('baseUrl')} 
              className="flex items-center gap-2 mb-2 cursor-pointer"
            >
              <span className="text-xs transition-transform duration-200" 
                    style={{ transform: sections.baseUrl ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                ▼
              </span>
              <span className="text-sm font-medium">Base URL</span>
            </div>
            {sections.baseUrl && (
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value="https://api.swarmmode.ai" 
                  readOnly 
                  className="flex-1 px-3 py-2 border border-gray-200 rounded text-sm bg-gray-50"
                />
                <button className="px-3 py-2 bg-gray-100 text-gray-600 rounded text-sm hover:bg-gray-200">
                  Edit
                </button>
              </div>
            )}
          </div>

          {/* Auth Section */}
          <div>
            <div 
              onClick={() => toggleSection('auth')}
              className="flex items-center gap-2 mb-2 cursor-pointer"
            >
              <span className="text-xs transition-transform duration-200"
                    style={{ transform: sections.auth ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                ▼
              </span>
              <span className="text-sm font-medium">Auth</span>
            </div>
            {sections.auth && (
              <div className="space-y-2">
                <label className="block text-sm text-gray-600">Bearer Token</label>
                <input 
                  type="text" 
                  placeholder="Bearer Token" 
                  className="w-full px-3 py-2 border border-gray-200 rounded text-sm"
                />
              </div>
            )}
          </div>

          {/* Parameters Section */}
          <div>
            <div 
              onClick={() => toggleSection('parameters')}
              className="flex items-center gap-2 mb-2 cursor-pointer"
            >
              <span className="text-xs transition-transform duration-200"
                    style={{ transform: sections.parameters ? 'rotate(0deg)' : 'rotate(-90deg)' }}>
                ▼
              </span>
              <span className="text-sm font-medium">Parameters</span>
            </div>
            {sections.parameters && (
              <button className="text-blue-500 hover:text-blue-600 text-sm">
                + Show optional parameters
              </button>
            )}
          </div>

          {/* Send Request Button */}
          <button className=" w-fit  bg-blue-500 text-white py-1 px-6 rounded hover:bg-blue-600 transition-colors mt-6">
            SEND API REQUEST
          </button>
        </div>
      </div>

      {/* Response Section */}
      <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-sm font-semibold text-gray-700">RESPONSE</h2>
          <button 
            onClick={handleClear}
            className="text-sm text-gray-600 hover:text-gray-800"
          >
            CLEAR
          </button>
        </div>
        
        <div className="text-sm text-gray-600 italic">
          {response || "Click the Send API Request button above and see the response here!"}
        </div>
      </div>
    </div>
  )
}

export default ReqRes