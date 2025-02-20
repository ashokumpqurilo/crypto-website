import { useState } from "react";
import MarketplaceSidebarCommon from "../Layout/marketplaceSidebar";

export default function CreateAgent() {
  const [script, setScript] = useState("def main(request, store):\n    pass");
  const [requirements, setRequirements] = useState("")
  const [environment, setEnvironment] = useState("")

  return (
    <MarketplaceSidebarCommon>

      <div className="p-10">
        <div className="flex items-center justify-between mb-4 gap-6 shadow-lg rounded-xl bg-gray-100 p-10">
          <div className="w-[45%]">
            <label className="block mb-1 font-medium">Name *</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-gray-200"
            />
          </div>
          <div className="w-[45%]">
            <label className="block mb-1 font-medium">Python version *</label>
            <select className="w-full p-3 rounded bg-gray-200">
              <option value="3.10">3.10</option>
              <option value="3.11">3.11</option>
              <option value="3.12">3.12</option>
              <option value="3.13">3.13</option>
            </select>
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <label className="block mb-2 font-medium">Script *</label>
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
        <div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg mt-4">
            <label className="block mb-2 font-medium">Requirements</label>
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
        </div>

        <div>
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg mt-4">
            <label className="block mb-2 font-medium">Environment variables</label>
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
        </div>

        <div className="flex items-center justify-between mb-4 gap-6 shadow-lg rounded-xl bg-gray-100 p-10 mt-4">
          <div className="w-[45%]">
            <label className="block mb-1 font-medium">Store *</label>
            <select className="w-full p-3 rounded bg-gray-200">
              <option value="3.10"></option>
            </select>
          </div>
        </div>


        <div className="flex justify-end mb-4 gap-6 shadow-lg rounded-xl bg-gray-100 p-10 mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Create
          </button>
        </div>
      </div>
     </MarketplaceSidebarCommon>
  );
}
