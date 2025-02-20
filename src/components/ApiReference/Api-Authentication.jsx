import React from "react";
import { MdHome } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import ApiCommonSidebar from "../Layout/Api-Common-Sidebar";
import CodeBlock from "../../common/CodeBlock";
import Breadcrumb from "../../common/breadcrumb";

const ApiAuthentication = () => {
  const apiKey = "YOUR_API_KEY";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`Authorization: Bearer ${apiKey}`);
    alert("API key copied to clipboard!");
  };

  return (
    <ApiCommonSidebar>
      <div className="min-h-screen p-6 w-[90%] md:w-[70%] lg:w-[70%] mt-10">
      <div className="flex items-center gap-2">
                      <MdHome className="text-xl" />
                      <span className="text-sm">›</span>
        
        <Breadcrumb title="Authentication" />
        
      </div>

        {/* Main Content */}
        <div className="mt-8">
          <h1 className="text-4xl md:text-5xl font-bold">Authentication</h1>
          <p className="mt-4 leading-relaxed font-medium font-semibold">
            The SwarmNode API uses API keys for authentication. Visit your{" "}
            <a href="#" className="underline text-blue-400">
              API keys
            </a>{" "}
            page to generate an API key.
          </p>

          <p className="mt-6 font-semibold mb-5">
            Include your API key in the Authorization HTTP header for every API
            request, as outlined below:
          </p>

          {/* API Key Box */}
          <CodeBlock content={`Authorization: Bearer ${apiKey}`} />
          
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-between items-center">

        <a
          href="/introduction"
          className="border border-blue-400 flex flex-col  items-start w-[350px] px-5 py-3 rounded-lg text-lg font-[500] transition-all"
        >
          <span
            className=" text-sm
          "
          >
          «  Previous
          </span>
          <span className="text-blue-400"> Introduction</span>
        </a>


        <a
          href="/list-all-agent-builder-jobs"
          className="border border-blue-400 flex flex-col justify-end items-end w-[350px] px-5 py-3 rounded-lg text-lg font-[500] transition-all"
        >
          <span
            className=" text-sm
          "
          >
            Next:
          </span>
          <span className="text-blue-400">List all agent builder jobs »</span>
        </a>
      </div>
      </div>
    </ApiCommonSidebar>
  );
};

export default ApiAuthentication;
