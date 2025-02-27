import { useState } from "react";
import MarketplaceSidebarCommon from "../Layout/marketplaceSidebar";

export default function CreateAgent() {
  const [script, setScript] = useState("def main(request, store):\n    pass");
  const [requirements, setRequirements] = useState("");
  const [environment, setEnvironment] = useState("");

  return (
    <MarketplaceSidebarCommon>
      <div className="p-4 md:p-6 lg:p-10">
        {/* Name and Python version */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-6 shadow-lg rounded-xl bg-gray-100 p-6 md:p-10">
          <div className="w-full md:w-[45%]">
            <label className="block mb-1 font-medium">Name *</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded bg-gray-200"
            />
          </div>
          <div className="w-full md:w-[45%]">
            <label className="block mb-1 font-medium">Python version *</label>
            <select className="w-full p-3 rounded bg-gray-200">
              <option value="3.10">3.10</option>
              <option value="3.11">3.11</option>
              <option value="3.12">3.12</option>
              <option value="3.13">3.13</option>
            </select>
          </div>
        </div>

        {/* Script Editor */}
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

        {/* Requirements and Environment */}
        {[{ label: "Requirements", value: requirements, setValue: setRequirements },
          { label: "Environment variables", value: environment, setValue: setEnvironment }]
          .map(({ label, value, setValue }, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-lg mt-4">
              <label className="block mb-2 font-medium">{label}</label>
              <div className="relative">
                <textarea
                  className="w-full h-40 p-3 pl-10 rounded font-mono"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <div className="absolute top-3 left-3 text-sm font-mono">
                  {value.split("\n").map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}

        {/* Store selection */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-6 shadow-lg rounded-xl bg-gray-100 p-6 md:p-10 mt-4">
          <div className="w-full md:w-[45%]">
            <label className="block mb-1 font-medium">Store *</label>
            <select className="w-full p-3 rounded bg-gray-200">
              <option value="">Select a Store</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end shadow-lg rounded-xl bg-gray-100 p-6 md:p-10 mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Create
          </button>
        </div>
      </div>
    </MarketplaceSidebarCommon>
  );
}
