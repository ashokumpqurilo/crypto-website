import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
const Schema = () => {
  const [isSchemaOpen, setIsSchemaOpen] = useState(true);
  const [isResultsOpen, setIsResultsOpen] = useState(true);
  const [isQueryParamsOpen, setIsQueryParamsOpen] = useState(true);
  return (
    <div className="w-full  p-5 px-10 ">
      <h1 className="text-3xl font-bold mb-6">
        List all agent executor cron jobs
      </h1>

      {/* Endpoint Section */}
      <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3 mb-6">
        <span className="bg-blue-600 text-white px-2 py-1 rounded font-semibold text-sm">
          GET
        </span>
        <span className="font-mono">
          https://api.swarmmode.ai/v1/agent-executor-cron-jobs/
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-8 leading-relaxed">
        Returns a list of agent executor cron jobs. Can be filtered by{" "}
        <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">
            
          agent_id
        </code>
        .
      </p>

      {/* Request Section */}
      <h2 className="text-2xl font-bold mb-4">Request</h2>
      <div className="bg-white rounded-lg px-4 pb-8">
        <button
          onClick={() => setIsQueryParamsOpen(!isQueryParamsOpen)}
          className="w-full flex items-center gap-2 text-sm font-semibold"
        >
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isQueryParamsOpen ? "transform rotate-0" : "transform -rotate-90"
            }`}
          />
          QUERY PARAMETERS
        </button>

        {isQueryParamsOpen && (
          <div className="mt-4 pl-4 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
            <div className="flex items-center gap-3 w-full justify-start">
              <code className="font-mono relative">
                <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                agent_id</code>

              <span className="text-gray-500 text-sm">uuid</span>
            </div>
          </div>
        )}
      </div>

      {/* Response Section */}
      <div className=" flex items-center gap-2 justify-between">
        <h2 className="text-2xl font-bold mb-4">Responses</h2>
        <div className="bg-green-600 w-fit text-white px-2 py-1 rounded text-sm">
          200
        </div>
      </div>
      <div className="bg-white rounded-lg ">
        <div className="border w-fit border-gray-200 px-2 py-1 rounded text-sm">
          APPLICATION/JSON
        </div>
        <div className="mt-6 flex items-center gap-2">
          <button className="px-4 py-1 border border-gray-200 rounded  hover:bg-gray-50 transition-colors">
            Schema
          </button>
          <button className="px-4 py-1 border border-gray-200 rounded  hover:bg-gray-50 transition-colors">
            Example (from schema)
          </button>
        </div>

        {/* Schema Section */}
        <div className="bg-white  overflow-hidden">
          <button
            onClick={() => setIsSchemaOpen(!isSchemaOpen)}
            className="w-full flex items-center gap-2 mt-6  text-sm font-semibold "
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isSchemaOpen ? "transform rotate-0" : "transform -rotate-90"
              }`}
            />
            SCHEMA
          </button>

          {isSchemaOpen && (
            <div className="px-6  border-gray-100">
              <div className="relative pl-4 space-y-4 font-mono text-[15px]">
                {/* Vertical guide line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

                <div className="flex items-center gap-3 w-full justify-between">
                  <div className="font-bold relative ">
                    <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                    total_count
                  </div>
                  <div className="w-full bg-gray-200 h-px "></div>
                  <span className="text-gray-500">integer</span>
                </div>

                <div className="flex items-center gap-3 w-full justify-between">
                  <div className="font-bold relative ">
                    <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                    current_page
                  </div>
                  <div className="w-full bg-gray-200 h-px "></div>
                  <span className="text-gray-500">integer</span>
                </div>

                <div className="flex items-center gap-3 w-full justify-between">
                  <div className="flex items-center gap-2">
                    <div className="font-bold relative ">
                      <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                      next
                    </div>
                    <span className="text-gray-500">uri</span>
                  </div>
                  <div className="w-full bg-gray-200 h-px "></div>
                  <span className="text-[#0EA5E9] text-xs">NULLABLE</span>
                </div>

                <div className="flex items-center gap-3 w-full justify-between">
                  <div className="flex items-center gap-2">
                    <div className="font-bold relative ">
                      <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                      previous
                    </div>
                    <span className="text-gray-500">uri</span>
                  </div>
                  <div className="w-full bg-gray-200 h-px "></div>
                  <span className="text-[#0EA5E9] text-xs">NULLABLE</span>
                </div>

                <div className="relative">
                  <button
                    onClick={() => setIsResultsOpen(!isResultsOpen)}
                    className="flex items-center gap-2 mb-2"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isResultsOpen
                          ? "transform rotate-0"
                          : "transform -rotate-90"
                      }`}
                    />
                    <div className="font-bold ">
                      results
                    </div>
                    <span className="text-gray-500">object[]</span>
                  </button>

                  {isResultsOpen && (
                    <div className="relative pl-4 space-y-4">
                      {/* Nested vertical guide line */}
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

                      <div className="flex items-center gap-3 w-full justify-between">
                        <div className="flex items-center gap-2">
                          <div className="font-bold relative ">
                            <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                            id
                          </div>
                          <div className="w-full bg-gray-200 h-px "></div>
                          <span className="text-gray-500">uuid</span>
                        </div>{" "}
                        <div className="w-full bg-gray-200 h-px "></div>
                        <span className="text-red-500 text-xs">REQUIRED</span>
                      </div>

                      <div className="flex items-center gap-3 w-full justify-between">
                        <div className="flex items-center gap-2">
                          <div className="font-bold relative ">
                            <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                            agent_id
                          </div>
                          <div className="w-full bg-gray-200 h-px "></div>
                          <span className="text-gray-500">uuid</span>
                        </div>
                        <div className="w-full bg-gray-200 h-px "></div>

                        <span className="text-red-500 text-xs">REQUIRED</span>
                      </div>

                      <div className="flex items-center gap-3 w-full justify-between">
                        <div className="flex items-center gap-2">
                          <div className="font-bold relative ">
                            <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                            name
                          </div>
                          <div className="w-full bg-gray-200 h-px "></div>
                          <span className="text-gray-500">string</span>
                        </div>
                        <div className="w-full bg-gray-200 h-px "></div>

                        <span className="text-red-500 text-xs">REQUIRED</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-3 w-full justify-between">
                          <div className="flex items-center gap-2">
                            <div className="font-bold relative ">
                              <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                              status
                            </div>
                            <div className="w-full bg-gray-200 h-px "></div>
                            <span className="text-gray-500">string</span>
                          </div>
                          <div className="w-full bg-gray-200 h-px "></div>

                          <span className="text-red-500 text-xs">REQUIRED</span>
                        </div>
                        <div className="pl-4">
                          <div className="mb-1">
                            Possible values: [
                            <span className="bg-[#EFF6FF] px-1.5 rounded">
                              suspended
                            </span>
                            ,{" "}
                            <span className="bg-[#EFF6FF] px-1.5 rounded">
                              running
                            </span>
                            ]
                          </div>
                          <div>
                            <span className="bg-[#EFF6FF] px-1.5 rounded">
                              suspended
                            </span>{" "}
                            - Suspended
                          </div>
                          <div>
                            <span className="bg-[#EFF6FF] px-1.5 rounded">
                              running
                            </span>{" "}
                            - Running
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 w-full justify-between">
                        <div className="flex items-center gap-2">
                          <div className="font-bold relative ">
                            <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                            expression
                          </div>
                          <span className="text-gray-500">string</span>
                        </div>
                        <div className="w-full bg-gray-200 h-px "></div>

                        <span className="text-red-500 text-xs">REQUIRED</span>
                      </div>

                      <div className="flex items-center gap-3 w-full justify-between">
                        <div className="flex items-center gap-2">
                          <div className="font-bold relative ">
                            <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                            execution_stream_address
                          </div>
                          <span className="text-gray-500">string</span>
                        </div>
                        <div className="w-full bg-gray-200 h-px "></div>

                        <span className="text-red-500 text-xs">REQUIRED</span>
                      </div>

                      <div className="flex items-center gap-3 w-full justify-between">
                        <div className="flex items-center gap-2">
                          <div className="font-bold relative ">
                            <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                            created
                          </div>
                          <span className="text-gray-500 text-nowrap">
                            date-time
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 h-px "></div>

                        <span className="text-red-500 text-xs">REQUIRED</span>
                      </div>

                      <div className="flex items-center gap-3 w-full justify-between">
                        <div className="flex items-center gap-2">
                          <div className="font-bold relative ">
                            <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                            modified
                          </div>
                          <span className="text-gray-500 text-nowrap">
                            date-time
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 h-px "></div>

                        <span className="text-red-500 text-xs">REQUIRED</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schema;
