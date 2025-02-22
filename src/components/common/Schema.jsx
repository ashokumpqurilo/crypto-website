import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import CodeBlock from "./Codeblock";
import RequestPage from "./RequestPage";
import SchemaField from "./SchemaField";

const Schema = ({ schemaData }) => {
  console.log(schemaData, "schemaData");
  const [isSchemaOpen, setIsSchemaOpen] = useState(true);
  const [isResultsOpen, setIsResultsOpen] = useState(true);
  const [isExampleOpen, setIsExampleOpen] = useState(true);
  const [isLogsOpen, setIsLogsOpen] = useState(true);
  const [isDataOpen, setIsDataOpen] = useState(true);
  const [isResultsLogsOpen, setIsResultsLogsOpen] = useState(true);
  const [isResultsDataOpen, setIsResultsDataOpen] = useState(true);
  return (
    <div className="flex-1 p-5 px-6 ">
      <h1 className="text-3xl font-bold mb-6">{schemaData.title}</h1>

      {/* Endpoint Section */}
      <div className="bg-gray-50 p-3 rounded-lg flex items-center gap-3 mb-6">
        <span className="bg-blue-600 text-white px-2 py-1 rounded font-semibold text-sm">
          {schemaData.method}
        </span>
        <span className="font-mono">{schemaData.endpoint}</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-8 flex items-center gap-2 leading-relaxed">
        {schemaData.description}
        {schemaData.descriptionCode && (
          <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono">
            {schemaData.descriptionCode}
          </code>
        )}
      </p>

      {/* Request Section */}
      <h2 className="text-2xl font-bold mb-4">Request</h2>
      <RequestPage
        type={schemaData.request.type}
        parameters={schemaData.request.queryParameters}
        body={schemaData.request.body}
        payload={schemaData.request.payload}
      />

      {/* Response Section */}
      <div className=" flex items-center gap-2 justify-between">
        <h2 className="text-2xl font-bold mb-4">Responses</h2>
        <div className="bg-green-600 w-fit text-white px-2 py-1 rounded text-sm">
          {schemaData.response.status}
        </div>
      </div>
      {schemaData?.response?.description === "Success" ? (
        <>
          <div className="bg-white rounded-lg ">
            <div className="border text-blue-500 w-fit border-blue-400 px-2 py-1 rounded text-xs">
              APPLICATION/JSON
            </div>
            <div className="mt-6 flex items-center gap-2">
              <button
                onClick={() => setIsExampleOpen(true)}
                className={`px-4 text-xs py-1 border border-gray-200 rounded  hover:bg-gray-50 transition-colors ${
                  isExampleOpen
                    ? "bg-gray-50 border-blue-400 text-blue-500"
                    : ""
                }`}
              >
                Schema
              </button>
              <button
                onClick={() => setIsExampleOpen(false)}
                className={`px-4 text-xs py-1 border border-gray-200 rounded  hover:bg-gray-50 transition-colors ${
                  isExampleOpen
                    ? ""
                    : "bg-gray-50 border-blue-400 text-blue-500"
                }`}
              >
                Example (from schema)
              </button>
            </div>

            {/* Schema Section */}
            {isExampleOpen ? (
              <div className="bg-white  overflow-hidden">
                <button
                  onClick={() => setIsSchemaOpen(!isSchemaOpen)}
                  className="w-full flex items-center gap-2 mt-6  text-sm font-semibold "
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isSchemaOpen
                        ? "transform rotate-0"
                        : "transform -rotate-90"
                    }`}
                  />
                  SCHEMA
                </button>

                {isSchemaOpen && (
                  <div className="px-6 border-gray-100">
                    <div className="relative pl-4 space-y-4 font-mono text-[15px]">
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

                      {schemaData.mainFields.map((field, index) => (
                        <>
                          <SchemaField
                            key={index}
                            field={field}
                            nested={true}
                          />
                          {field.options && (
                            <div className="pl-4">
                              <div className="mb-1">
                                Possible values: [
                                {field.options.map((option, i) => (
                                  <React.Fragment key={i}>
                                    <span className="bg-[#EFF6FF] px-1.5 rounded">
                                      {option.value}
                                    </span>
                                    {i < field.options.length - 1 && ", "}
                                  </React.Fragment>
                                ))}
                                ]
                              </div>
                              {field.options.map((option, i) => (
                                <div key={i}>
                                  <span className="bg-[#EFF6FF] px-1.5 rounded">
                                    {option.value}
                                  </span>{" "}
                                  - {option.label}
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      ))}

                      {schemaData.results && (
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
                            <div className="font-bold">results</div>
                            <span className="text-gray-500">
                              {schemaData.results.type}
                            </span>
                          </button>

                          {isResultsOpen && (
                            <div className="relative pl-4 space-y-4">
                              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

                              {schemaData.results.fields.map((field, index) => (
                                <div key={index} className="space-y-2">
                                  <SchemaField field={field} nested={true} />
                                  {field.options && (
                                    <div className="pl-4">
                                      <div className="mb-1">
                                        Possible values: [
                                        {field.options.map((option, i) => (
                                          <React.Fragment key={i}>
                                            <span className="bg-[#EFF6FF] px-1.5 rounded">
                                              {option.value}
                                            </span>
                                            {i < field.options.length - 1 &&
                                              ", "}
                                          </React.Fragment>
                                        ))}
                                        ]
                                      </div>
                                      {field.options.map((option, i) => (
                                        <div key={i}>
                                          <span className="bg-[#EFF6FF] px-1.5 rounded">
                                            {option.value}
                                          </span>{" "}
                                          - {option.label}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                              {schemaData.results.logs && (
                                <div className="relative">
                                  <button
                                    onClick={() => setIsResultsLogsOpen(!isResultsLogsOpen)}
                                    className="flex w-full items-center justify-between gap-2 mb-2"
                                  >
                                    <div className=" flex items-center gap-2">
                                      <ChevronDown
                                        className={`w-4 h-4 transition-transform ${
                                          isResultsLogsOpen
                                            ? "transform rotate-0"
                                            : "transform -rotate-90"
                                        }`}
                                      />
                                      <div className="font-bold">logs</div>
                                      <span className="text-gray-500">
                                        {schemaData.results.logs.type}
                                      </span>
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                      {schemaData.results.logs.required && (
                                        <span className="text-red-500 text-xs">
                                          REQUIRED
                                        </span>
                                      )}
                                    </div>
                                  </button>

                                  {isResultsLogsOpen && (
                                    <div className="relative pl-4 space-y-4">
                                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

                                      {schemaData.results.logs.fields.map(
                                        (field, index) => (
                                          <div
                                            key={index}
                                            className="space-y-2"
                                          >
                                            <SchemaField
                                              field={field}
                                              nested={true}
                                            />
                                            {field.options && (
                                              <div className="pl-4">
                                                <div className="mb-1">
                                                  Possible values: [
                                                  {field.options.map(
                                                    (option, i) => (
                                                      <React.Fragment key={i}>
                                                        <span className="bg-[#EFF6FF] px-1.5 rounded">
                                                          {option.value}
                                                        </span>
                                                        {i <
                                                          field.options.length -
                                                            1 && ", "}
                                                      </React.Fragment>
                                                    )
                                                  )}
                                                  ]
                                                </div>
                                                {field.options.map(
                                                  (option, i) => (
                                                    <div key={i}>
                                                      <span className="bg-[#EFF6FF] px-1.5 rounded">
                                                        {option.value}
                                                      </span>{" "}
                                                      - {option.label}
                                                    </div>
                                                  )
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                              {schemaData.results.data && (
                                <div className="relative">
                                  <button
                                    onClick={() => setIsResultsDataOpen(!isResultsDataOpen)}
                                    className="flex w-full items-center justify-between gap-2 mb-2"
                                  >
                                    <div className=" flex items-center gap-2">
                                      <ChevronDown
                                        className={`w-4 h-4 transition-transform ${
                                          isResultsDataOpen
                                            ? "transform rotate-0"
                                            : "transform -rotate-90"
                                        }`}
                                      />
                                      <div className="font-bold">data</div>
                                      <span className="text-gray-500">
                                        {schemaData.results.data.type}
                                      </span>
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                      {schemaData.results.data.required && (
                                        <span className="text-red-500 text-xs">
                                          REQUIRED
                                        </span>
                                      )}
                                    </div>
                                  </button>

                                  {isResultsDataOpen && (
                                    <div className="relative pl-4 space-y-4">
                                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

                                      {schemaData.results.data.fields.map(
                                        (field, index) => (
                                          <div
                                            key={index}
                                            className="space-y-2"
                                          >
                                            <SchemaField
                                              field={field}
                                              nested={true}
                                            />
                                            {field.options && (
                                              <div className="pl-4">
                                                <div className="mb-1">
                                                  Possible values: [
                                                  {field.options.map(
                                                    (option, i) => (
                                                      <React.Fragment key={i}>
                                                        <span className="bg-[#EFF6FF] px-1.5 rounded">
                                                          {option.value}
                                                        </span>
                                                        {i <
                                                          field.options.length -
                                                            1 && ", "}
                                                      </React.Fragment>
                                                    )
                                                  )}
                                                  ]
                                                </div>
                                                {field.options.map(
                                                  (option, i) => (
                                                    <div key={i}>
                                                      <span className="bg-[#EFF6FF] px-1.5 rounded">
                                                        {option.value}
                                                      </span>{" "}
                                                      - {option.label}
                                                    </div>
                                                  )
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                      {schemaData.logs && (
                        <div className="relative">
                          <button
                            onClick={() => setIsLogsOpen(!isLogsOpen)}
                            className="flex w-full items-center justify-between gap-2 mb-2"
                          >
                            <div className=" flex items-center gap-2">
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  isLogsOpen
                                    ? "transform rotate-0"
                                    : "transform -rotate-90"
                                }`}
                              />
                              <div className="font-bold">logs</div>
                              <span className="text-gray-500">
                                {schemaData.logs.type}
                              </span>
                            </div>
                            <div className="text-gray-500 text-sm">
                              {schemaData.logs.required && (
                                <span className="text-red-500 text-xs">
                                  REQUIRED
                                </span>
                              )}
                            </div>
                          </button>

                          {isLogsOpen && (
                            <div className="relative pl-4 space-y-4">
                              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

                              {schemaData.logs.fields.map((field, index) => (
                                <div key={index} className="space-y-2">
                                  <SchemaField field={field} nested={true} />
                                  {field.options && (
                                    <div className="pl-4">
                                      <div className="mb-1">
                                        Possible values: [
                                        {field.options.map((option, i) => (
                                          <React.Fragment key={i}>
                                            <span className="bg-[#EFF6FF] px-1.5 rounded">
                                              {option.value}
                                            </span>
                                            {i < field.options.length - 1 &&
                                              ", "}
                                          </React.Fragment>
                                        ))}
                                        ]
                                      </div>
                                      {field.options.map((option, i) => (
                                        <div key={i}>
                                          <span className="bg-[#EFF6FF] px-1.5 rounded">
                                            {option.value}
                                          </span>{" "}
                                          - {option.label}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                      {schemaData.data && (
                        <div className="relative">
                          <button
                            onClick={() => setIsDataOpen(!isDataOpen)}
                            className="flex w-full items-center justify-between gap-2 mb-2"
                          >
                            <div className=" flex items-center gap-2">
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  isDataOpen
                                    ? "transform rotate-0"
                                    : "transform -rotate-90"
                                }`}
                              />
                              <div className="font-bold">data</div>
                              <span className="text-gray-500">
                                {schemaData.data.type}
                              </span>
                            </div>
                            <div className="text-gray-500 text-sm">
                              {schemaData.data.required && (
                                <span className="text-red-500 text-xs">
                                  REQUIRED
                                </span>
                              )}
                            </div>
                          </button>

                          {isDataOpen && (
                            <div className="relative pl-4 space-y-4">
                              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

                              {schemaData.data.fields.map((field, index) => (
                                <div key={index} className="space-y-2">
                                  <SchemaField field={field} nested={true} />
                                  {field.options && (
                                    <div className="pl-4">
                                      <div className="mb-1">
                                        Possible values: [
                                        {field.options.map((option, i) => (
                                          <React.Fragment key={i}>
                                            <span className="bg-[#EFF6FF] px-1.5 rounded">
                                              {option.value}
                                            </span>
                                            {i < field.options.length - 1 &&
                                              ", "}
                                          </React.Fragment>
                                        ))}
                                        ]
                                      </div>
                                      {field.options.map((option, i) => (
                                        <div key={i}>
                                          <span className="bg-[#EFF6FF] px-1.5 rounded">
                                            {option.value}
                                          </span>{" "}
                                          - {option.label}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white mt-6 overflow-hidden">
                <CodeBlock content={schemaData.code} className="text-sm" />
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="bg-white rounded-lg ">No response body</div>
        </>
      )}
    </div>
  );
};

export default Schema;