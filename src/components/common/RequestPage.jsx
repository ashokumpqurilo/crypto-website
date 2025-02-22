import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SchemaField from "./SchemaField";

const RequestPage = ({ type, parameters, body, payload }) => {
  const [isQueryParamsOpen, setIsQueryParamsOpen] = useState(true);
  const [isBodyOpen, setIsBodyOpen] = useState(true);
  const [isPayloadOpen, setIsPayloadOpen] = useState(true);
console.log(payload,'payload')
  return (
    <div className="bg-white rounded-lg  pb-8 ">
      {parameters && (
        <>
          <button
            onClick={() => setIsQueryParamsOpen(!isQueryParamsOpen)}
            className="w-full flex items-center gap-2 text-sm font-semibold"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isQueryParamsOpen
                  ? "transform rotate-0"
                  : "transform -rotate-90"
              }`}
            />
            {type}
            {parameters.required && (
              <span className="text-red-500 text-xs">REQUIRED</span>
            )}
          </button>

          {isQueryParamsOpen && (
            <div className="mt-4 pl-4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
              {parameters.map((param, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 w-full justify-between"
                >
                  <div className="flex items-center gap-2">
                    <code className="font-mono relative">
                      <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                      {param.name}
                    </code>
                    <span className="text-gray-500 text-sm">{param.type}</span>
                  </div>
                  {param.required && (
                    <span className="text-red-500 text-xs">REQUIRED</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {body && (
        <>
          <div className="border  my-4  text-blue-500 w-fit border-blue-400 px-2 py-1 rounded text-xs">
            APPLICATION/JSON
          </div>
          <button
            onClick={() => setIsBodyOpen(!isBodyOpen)}
            className="w-full  flex items-center gap-2 text-sm font-semibold"
          >
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isBodyOpen ? "transform rotate-0" : "transform -rotate-90"
              }`}
            />
            {body.type}
            {body.required && (
                      <span className="text-red-500 text-xs">REQUIRED</span>
                    )}
          </button>
          {isBodyOpen && (
            <div className="flex flex-col gap-2 mt-4 pl-4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
              {body.fields.map((field, index) => (
                <>
                  <div
                    key={index}
                    className="flex items-center gap-3 w-full justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <code className="font-mono relative">
                        <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
                        {field.name}
                      </code>
                      <span className="text-gray-500 text-sm">
                        {field.type}
                      </span>
                    </div>
                    {field.required && (
                      <span className="text-red-500 text-xs">REQUIRED</span>
                    )}
                  </div>
                  {field.options && (
                    <div className=" pl-2">
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
              {payload && (
                                <div className="relative">
                                  <button
                                    onClick={() => setIsPayloadOpen(!isPayloadOpen)}
                                    className="flex items-center gap-2 mb-2"
                                  >
                                    <ChevronDown
                                      className={`w-4 h-4 transition-transform ${
                                        isPayloadOpen
                                          ? "transform rotate-0"
                                          : "transform -rotate-90"
                                      }`}
                                    />
                                    <div className="font-semibold">payload</div>
                                    <span className="text-gray-500">
                                      {payload.type}
                                    </span>
                                  </button>

                                  {isPayloadOpen && (
                                    <div className="relative pl-4 space-y-4">
                                      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />

                                      {payload.fields.map(
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
        </>
      )}
    </div>
  );
};

export default RequestPage;
