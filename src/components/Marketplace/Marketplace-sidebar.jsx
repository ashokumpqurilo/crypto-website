import { FaPlus, FaRobot, FaDatabase, FaShoppingCart, FaBook, FaBars } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MarketplaceSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
const navigate = useNavigate();
  return (
    <div className={`h-screen bg-gray-900 text-white p-4 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <button onClick={() => setIsCollapsed(!isCollapsed)} className="mb-4 text-white hover:text-blue-400">
        <FaBars size={24} />
      </button>
      {!isCollapsed && <h1 className="text-xl font-bold text-blue-400">SwarmNode</h1>}
      <nav className="mt-4">
        <div className="mb-2">
          <p className={`text-gray-400 ${isCollapsed ? 'hidden' : ''}`}>Agents</p>
          <button className="flex items-center gap-2 text-white hover:text-blue-400" onClick={()=>navigate('/marketplace')}>
            <FaPlus /> {!isCollapsed && "Create an Agent"}
          </button>
          <button className="flex items-center gap-2 text-white hover:text-blue-400 mt-2" onClick={()=>navigate('/agents')}>
            <FaRobot /> {!isCollapsed && "My Agents"}
          </button>
        </div>
        
        <div className="mb-2">
          <p className={`text-gray-400 ${isCollapsed ? 'hidden' : ''}`}>Stores</p>
          <button className="flex items-center gap-2 text-white hover:text-blue-400">
            <FaPlus /> {!isCollapsed && "Create a Store"}
          </button>
          <button className="flex items-center gap-2 text-white hover:text-blue-400 mt-2">
            <FaDatabase /> {!isCollapsed && "My Stores"}
          </button>
        </div>
        
        <div className="mb-2">
          <p className={`text-gray-400 ${isCollapsed ? 'hidden' : ''}`}>Vector Stores</p>
          <button className="flex items-center gap-2 text-white hover:text-blue-400">
            <FaPlus /> {!isCollapsed && "Create a Vector Store"}
          </button>
          <button className="flex items-center gap-2 text-white hover:text-blue-400 mt-2">
            <FaDatabase /> {!isCollapsed && "My Vector Stores"}
          </button>
        </div>
        
        <div className="mb-2">
          <p className={`text-gray-400 ${isCollapsed ? 'hidden' : ''}`}>Explore</p>
          <button className="flex items-center gap-2 text-white hover:text-blue-400">
            <FaShoppingCart /> {!isCollapsed && "Marketplace"}
          </button>
        </div>
        
        <div>
          <p className={`text-gray-400 ${isCollapsed ? 'hidden' : ''}`}>Learn</p>
          <button 
            onClick={() => setIsDocsOpen(!isDocsOpen)}
            className="flex items-center gap-2 text-white hover:text-blue-400"
          >
            <FaBook /> {!isCollapsed && "Documentation"}
          </button>
          {!isCollapsed && isDocsOpen && (
            <div className="ml-6 mt-2 space-y-2">
              <button className="text-gray-300 hover:text-blue-400">Getting Started</button>
              <button className="text-gray-300 hover:text-blue-400">Data Storage</button>
              <button className="text-gray-300 hover:text-blue-400">REST API</button>
              <button className="text-gray-300 hover:text-blue-400">Python SDK</button>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}