import React, { useState } from "react";
import MarketplaceSidebarCommon from "../Layout/marketplaceSidebar";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaPlus } from "react-icons/fa6";
import { CiPause1 } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";

const Agents = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showScript, setShowScript] = useState(false);
  const [showRequirements, setShowRequirements] = useState(false);
  const [showEnvVars, setShowEnvVars] = useState(false);
  const [requirements, setRequirements] = useState("");
  const [script, setScript] = useState("def main(request, store):\n    pass");
  const [environment, setEnvironment] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  return (
    <MarketplaceSidebarCommon>
      <div className="min-h-screen p-4 bg-gray-100 w-full">
        {isCollapsed ? (
          <div className="flex justify-center items-center h-screen text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h1 className="text-2xl font-bold text-gray-800">You have no agents</h1>
              <p className="text-gray-600 mt-2">Create your first agent</p>
              <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
                onClick={() => navigate("/marketplace")}
              >
                Create
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full ">
            <h1 className="text-xl font-bold mb-4">Agent</h1>
            <div className="flex flex-wrap justify-between items-center gap-3">
              <div className="flex flex-wrap gap-3 items-center">
                <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">Python 3.11</span>
                <span className="bg-teal-600 text-white px-3 py-1 rounded text-sm">Build succeeded</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="bg-blue-200 px-4 py-2 flex items-center gap-2 rounded-lg">
                  <AiFillThunderbolt /> Execute
                </button>
                <button className="bg-blue-200 px-4 py-2 flex items-center gap-2 rounded-lg">
                  <FaPlus /> Schedule
                </button>
                <button className="bg-blue-200 px-4 py-2 flex items-center gap-2 rounded-lg">
                  <MdContentCopy /> Copy Agent ID
                </button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow mt-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Executions</h2>
                <button
                  data-tooltip-id="play-pause-tooltip"
                  data-tooltip-content={isPaused ? "Enable real-time updates" : "Pause real-time updates"}
                  onClick={() => setIsPaused(!isPaused)}
                  className="text-xl"
                >
                  {isPaused ? <FaPlay /> : <CiPause1 />}
                </button>
                <Tooltip id="play-pause-tooltip" />
              </div>
              <div className="bg-gray-200 p-3 rounded mt-2">Agent has no executions yet.</div>
            </div>

            {[{
              title: "Script", state: showScript, setState: setShowScript, value: script, setValue: setScript
            }, {
              title: "Requirements", state: showRequirements, setState: setShowRequirements, value: requirements, setValue: setRequirements
            }, {
              title: "Environment variables", state: showEnvVars, setState: setShowEnvVars, value: environment, setValue: setEnvironment
            }].map((section, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow mt-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{section.title}</h2>
                  <button
                    onClick={() => section.setState(!section.state)}
                    className="px-4 py-2 bg-gray-300 rounded-lg"
                  >
                    {section.state ? "Hide" : "Show"}
                  </button>
                </div>
                {section.state && (
                  <div className="bg-gray-200 p-3 rounded mt-2">
                    <textarea
                      className="w-full h-40 p-3 rounded font-mono"
                      value={section.value}
                      onChange={(e) => section.setValue(e.target.value)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </MarketplaceSidebarCommon>
  );
};

export default Agents;
