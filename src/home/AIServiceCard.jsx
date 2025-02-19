import React from "react";

const AIServiceCard = () => {
  return (
    <div className=" to-black text-white p-10 md:p-20 flex flex-col items-center text-center bg-cover"
    style={{backgroundImage: "url(/images/grow.png)"}}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Create, launch, and chain AI agents effortlessly
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        Serverless AI agent deployment happens in the cloud, enabling users to create and manage AI workflows without server infrastructure.
      </p>
      <button id="#pricing" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
        See Pricing
      </button>
      
      {/* <div className="mt-10 w-full flex justify-center">
        <div className="relative rounded-lg overflow-hidden max-w-3xl">
          <img
            src="/image.png"
            alt="AI Payment UI"
            className="w-full h-auto border border-purple-500 rounded-lg"
          />
        </div>
      </div> */}
    </div>
  );
};

export default AIServiceCard;
