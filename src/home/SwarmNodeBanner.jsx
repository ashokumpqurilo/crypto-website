export default function SwarmNodeBanner() {
    return (
      <div className="bg-cover bg-center py-12 px-4">
        <div className="relative bg-gradient-to-r from-[#42275a] to-[#734b6d] w-[90%] md:w-[80%] mx-auto h-auto md:h-[300px] rounded-2xl p-6 md:p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Give it a shot, try out <span className="font-bold">SwarmNode</span>
            </h2>
            <p className="text-base md:text-lg mt-3 text-gray-300">
              Getting started is easy! Create a free account on our website, explore powerful features, and start building the future today.
            </p>
            <button className="mt-5 bg-[#B20CC1] hover:bg-purple-600 text-white text-sm md:text-base px-5 py-3 rounded-full transition">
              Quick Connect
            </button>
          </div>
          
          {/* Image appears only on medium screens and larger */}
          <div className="hidden md:block w-[150px] md:w-48 lg:w-56">
            <img src="/images/swarmbanner.png" alt="Illustration" className="w-full h-auto" />
          </div>
        </div>
      </div>
    );
  }
  