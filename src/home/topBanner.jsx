import React from "react";

const TopBanner = () => {
  return (
    <div
      className=" py-10 flex flex-col justify-center h-auto min-h-screen bg-center bg-no-repeat bg-cover px-4"
      
    >
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="w-full md:w-[50%] flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-bold text-white mb-6">
              Serverless AI agents deployed instantly
            </h1>
            <button className="w-full mt-4 sm:w-[180px] px-6 py-2 text-white text-lg font-medium rounded-full bg-gradient-to-r from-[#B20CC1] to-[#0D041F] shadow-lg hover:opacity-80 transition">
              Quick Connect
            </button>
          </div>

          <div className="w-full md:w-[50%] flex justify-center mt-6 md:mt-0">
            <img src="/images/topbanner.png" className="h-[250px] sm:h-[280px] md:h-[420px]" alt="Top Banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
