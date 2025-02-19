import Heading from "../common/Heading";

export default function Templates() {
    return (
        <>
    <div id="templates" className="py-6 lg:py-16 px-4 lg:px-8">

        <Heading title="New Templates" />
        
      <div className="flex items-center justify-center  to-black px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40">
        <div className="border-2 border-[#42275a] p-6 sm:p-10 rounded-lg shadow-lg w-full max-w-6xl flex flex-col sm:flex-row items-center">
          <div className="text-white sm:w-2/3 lg:w-3/5 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Create, launch, and chain AI agents effortlessly
            </h1>
            <p className="text-gray-300 mb-4 text-sm sm:text-base lg:text-lg">
              Serverless AI agent deployment happens in the cloud, enabling users to create and manage AI workflows
              without server infrastructure.
            </p>
            <a href="#" className="text-white font-bold underline text-lg sm:text-base">Visit market place</a>
          </div>
          <div className="sm:w-1/3 lg:w-2/5 border-2 rounded-xl border-[#42275a] h-48 sm:h-56 lg:h-64 w-full mt-4 sm:mt-0 py-4">
                <img  src="/images/topbanner.png" alt="AI" className="w-full h-full object-contain" />
            </div>
        </div>
      </div>
    </div>
        </>
    );
  }
  