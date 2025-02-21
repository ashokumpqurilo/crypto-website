import React, { useState } from "react";
import MarketplaceSidebarCommon from "../Layout/marketplaceSidebar";
import { useNavigate } from "react-router-dom";
import { FaPlay, FaPlus } from "react-icons/fa6";
import { CiPause1 } from "react-icons/ci";
import { Tooltip } from "react-tooltip";
import { AiFillThunderbolt, AiOutlineThunderbolt } from "react-icons/ai";
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
      {isCollapsed ? (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 text-white p-4">
          <div className="bg-gray-300 p-6 md:p-10 rounded-lg shadow-xl text-center w-full max-w-md">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              You have no agents
            </h1>
            <p className="text-gray-700 mt-2 text-sm md:text-base">
              Create your first agent
            </p>
            <button
              className="mt-4 px-4 md:px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full md:w-auto"
              onClick={() => navigate("/marketplace")}
            >
              Create
            </button>
          </div>
        </div>
      ) : (
        <div className="text-black min-h-screen p-4 w-full">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-xl font-bold">Agent</h1>
            <div className="flex justify-between item-center">
              <div className="flex gap-3 items-center mb-4 mt-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                  Python 3.11
                </span>
                <span className="bg-teal-600 text-white px-3 py-1 rounded text-sm">
                  Build succeeded
                </span>
                <div className="flex space-x-2"></div>
              </div>

              <div className="space-x-3 flex items-center ">
                <button className="bg-blue-200 px-4 py-2 flex items-center gap-2 rounded-lg">
                 <AiFillThunderbolt /> Execute
                </button>
                <button className="bg-blue-200 px-4 py-2 flex items-center gap-2 rounded-lg">
                 <FaPlus />  Schedule
                </button>
                <button className="bg-blue-200 px-4 py-2 flex items-center gap-2 rounded-lg">
                 <MdContentCopy />  Copy Agent ID
                </button>
              </div>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg shadow mb-4">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    Executions
                  </h2>
                </div>
                <div>
                  <button
                    data-tooltip-id="play-pause-tooltip"
                    data-tooltip-content={
                      isPaused
                        ? "Enable real-time updates"
                        : "Pause real-time updates"
                    }
                    data-tooltip-place="left"
                    onClick={() => setIsPaused(!isPaused)}
                    className="ml-2 text-white text-xl"
                  >
                    {isPaused ? (
                      <FaPlay className="text-black" />
                    ) : (
                      <CiPause1 className="text-black" />
                    )}
                  </button>
                  <Tooltip id="play-pause-tooltip" />
                </div>
              </div>
              <div className="bg-teal-600 p-3 rounded mt-2 text-gray-300">
                Agent has no executions yet.
              </div>
            </div>

            <div className="bg-gray-200 p-4 rounded-lg shadow mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-black">Script</h2>
                </div>
                <div>
                  <button
                    onClick={() => setShowScript(!showScript)}
                    className="mt-2 px-4 py-2 bg-gray-300 rounded-lg"
                  >
                    {showScript ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              {showScript && (
                <div className="bg-gray-200 p-3 rounded mt-2 text-gray-400">
                  <div className="relative">
                    <textarea
                      className="w-full h-40 p-3 pl-10 rounded font-mono"
                      value={script}
                      onChange={(e) => setScript(e.target.value)}
                    />
                    <div className="absolute top-3 left-3 text-sm font-mono">
                      {script.split("\n").map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-200 p-4 rounded-lg shadow mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    Requirements
                  </h2>
                </div>
                <div>
                  <button
                    onClick={() => setShowRequirements(!showRequirements)}
                    className="mt-2 px-4 py-2 bg-gray-300 rounded-lg"
                  >
                    {showRequirements ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              {showRequirements && (
                <div className="bg-gray-200 p-3 rounded mt-2 text-gray-400">
                  <div className="relative">
                    <textarea
                      className="w-full h-40 p-3 pl-10 rounded font-mono"
                      value={requirements}
                      onChange={(e) => setRequirements(e.target.value)}
                    />
                    <div className="absolute top-3 left-3 text-sm font-mono">
                      {requirements.split("\n").map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-200 p-4 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold text-black">
                    Environment variables
                  </h2>
                </div>
                <div>
                  <button
                    onClick={() => setShowEnvVars(!showEnvVars)}
                    className="mt-2 px-4 py-2 bg-gray-300 rounded-lg"
                  >
                    {showEnvVars ? "Hide" : "Show"}
                  </button>
                </div>
              </div>{" "}
              {showEnvVars && (
                <div className="bg-gray-200 p-3 rounded mt-2 text-gray-400">
                  <div className="relative">
                    <textarea
                      className="w-full h-40 p-3 pl-10 rounded font-mono"
                      value={environment}
                      onChange={(e) => setEnvironment(e.target.value)}
                    />
                    <div className="absolute top-3 left-3 text-sm font-mono">
                      {environment.split("\n").map((_, i) => (
                        <div key={i}>{i + 1}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </MarketplaceSidebarCommon>
  );
};

export default Agents;
