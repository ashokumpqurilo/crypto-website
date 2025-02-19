import React from "react";
import Heading from "../common/Heading";

const BountyCard = () => {
  return (
    <div
      className="text-white rounded-full w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] flex flex-col items-center justify-center p-4 text-center"
      style={{
        background:
          "linear-gradient(90deg, rgba(178,12,193,0.6) 18%, rgba(13,4,31,0.6) 88%)",
      }}
    >
      <div className="text-lg font-bold flex items-center gap-2">
        <span className="text-xl">
          <img src="/images/grow1.png" alt="" />
        </span>
        4000 SNAI
      </div>
      <p className="text-[14px] mt-1 text-[#B7BFE0] mb-6 font-[600]">
        Cost Basis AI Bot
      </p>
      <p className="text-[15px] mt-2 mb-6">
        In layman's terms, I would like a bot that people can connect their
        wallet to and get an average cost basis for the...
      </p>
      <p className="text-[14px] text-blue-300 mt-2 font-bold">
        Published <span className="text-[#B7BFE0]">7 JAN</span>
      </p>
    </div>
  );
};

const SwarmNodeBounties = () => {
  return (
    <div
      id="bounties"
      className=" flex flex-col items-center text-white p-6 sm:p-10 bg-cover"
    //   style={{ backgroundImage: "url(/images/grow.png)" }}
    >
      <Heading title={"Grow with SwarmNode"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1200px] mt-6 justify-items-center">
        <BountyCard />
        <BountyCard />
        <BountyCard />
      </div>
    </div>
  );
};

export default SwarmNodeBounties;
