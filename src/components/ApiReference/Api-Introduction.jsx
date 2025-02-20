import React from "react";
import { MdHome } from "react-icons/md";
import ApiCommonSidebar from "../Layout/Api-Common-Sidebar";
import Breadcrumb from "../../common/breadcrumb";

const ApiIntroduction = () => {
  return (
    <ApiCommonSidebar>

    <div className="min-h-screen p-6 w-[90%] md:w-[70%] lg:w-[70%] mt-10">
      <div className="flex items-center gap-2">
                      <MdHome className="text-xl" />
                      <span className="text-sm">›</span>
        
        <Breadcrumb title="Introduction" />
      </div>

      {/* Main Content */}
      <div className="mt-8">
        <h1 className="text-4xl md:text-5xl font-bold">Introduction</h1>
        <p className="mt-4 leading-relaxed font-medium ">
          The SwarmNode API is designed based on REST architecture, with
          predictably structured, resource-focused URLs. It uses JSON for both
          its request bodies and response payloads, and follows established
          practices for HTTP response codes, authentication, and verbs.
        </p>

        <p className="mt-6 font-medium">
          Alternatively, you can use the{" "}
          <a href="#" className="underline text-blue-400">
            SwarmNode Python SDK
          </a>{" "}
          to interact with the API.
        </p>

        <p className="mt-6 font-medium">
          Download OpenAPI spec{" "}
          <a href="#" className="text-blue-400 underline">
            here
          </a>
          .
        </p>
      </div>

      <div className="mt-10 flex justify-end">
        <a
          href="/authentication"
          className="border border-blue-400 flex flex-col justify-end items-end w-[350px] px-5 py-3 rounded-lg text-lg font-[500] transition-all"
        >
          <span
            className=" text-sm
          "
          >
            Next:
          </span>
          <span className="text-blue-400">Authentication »</span>
        </a>
      </div>
    </div>
    </ApiCommonSidebar>

  );
};

export default ApiIntroduction;
