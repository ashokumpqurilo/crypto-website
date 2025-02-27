import { Link, useLocation } from "react-router-dom";
import React from 'react'

const GettingStartedSidebar = () => {
  const location = useLocation();

  return (
    <div className="fixed  left-0 top-14 w-64 h-full border-r p-4 bg-white hidden lg:block">
      <nav className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-800 mb-2">Documentation</h3>
          <div className="space-y-1">
            <Link 
              to="/getting-started" 
              className={`block px-2 py-1.5 rounded hover:bg-gray-100 transition-colors ${
                location.pathname === '/getting-started' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Getting Started
            </Link>
            <Link 
              to="/data-storage" 
              className={`block px-2 py-1.5 rounded hover:bg-gray-100 transition-colors ${
                location.pathname === '/data-storage' ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              Data Storage
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default GettingStartedSidebar
