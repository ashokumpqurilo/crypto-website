import React from "react";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";

const Documentation = () => {
  return (
    <div id="documentation" className="py-6 lg:py-16 px-4 lg:px-8">
      <Heading title="Documentation" />
      
      <div className="bg-gradient-to-r from-[#1a0429] to-[#2b0645] rounded-2xl py-12 px-6 md:px-12 lg:px-16 text-white w-[95%] md:w-[80%] mx-auto">
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
              Create, launch, and chain AI agents effortlessly
            </h2>
            <p className="text-[#B7BFE0] text-base md:text-lg">
              Serverless AI agent deployment happens in the cloud, enabling users to create and manage AI workflows without server infrastructure.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/feature1.png"
              alt="AI Agent"
              className="w-[90%] max-w-[300px] md:max-w-[350px] lg:max-w-[400px]"
            />
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 mt-12">
        <Link to="/getting-started" className="w-full sm:w-[180px] px-6 py-2 text-white text-lg font-medium rounded-full bg-gradient-to-r from-[#B20CC1] to-[#0D041F] shadow-lg hover:opacity-80 transition">
          Getting Started
        </Link>

        <Link to="/api-reference/introduction" className="w-full sm:w-[280px] px-6 py-2 text-white text-lg font-medium rounded-full bg-gradient-to-r from-[#B20CC1] to-[#0D041F] shadow-lg hover:opacity-80 transition">
          API Documentation
        </Link>

        <Link to="/python-sdk" className="w-full sm:w-[180px] px-6 py-2 text-white text-lg font-medium rounded-full bg-gradient-to-r from-[#B20CC1] to-[#0D041F] shadow-lg hover:opacity-80 transition">
          SDK
        </Link>

        <Link to="/help" className="w-full sm:w-[180px] px-6 py-2 text-white text-lg font-medium rounded-full bg-gradient-to-r from-[#B20CC1] to-[#0D041F] shadow-lg hover:opacity-80 transition">
          Help
        </Link>
      </div>
    </div>
  );
};

export default Documentation;