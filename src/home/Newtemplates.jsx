import React from 'react';
import Heading from "../common/Heading";

export default function Templates() {
    return (
        <div id="templates" className="py-6 lg:py-16 px-4 md:px-6 lg:px-8">
            <Heading title="USER GUIDE" />
            <div className="flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="border-2 border-[#42275a] p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-lg w-full max-w-6xl flex flex-col md:flex-row items-center">
                    <div className="text-white md:w-2/3 lg:w-3/5 text-center md:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        AI Agent Deployment, Simplified 🚀
                        </h1>
                        <p className="text-gray-300 mb-4 text-sm sm:text-base md:text-lg">
                        XXX lets you deploy and run AI agents effortlessly with our multi-language SDKs. Get started quickly with step-by-step guides and a seamless development experience.
                        </p>
                        <a href="#" className="text-white font-bold underline text-sm sm:text-base md:text-lg">Visit marketplace</a>
                    </div>
                    <div className="md:w-1/3 lg:w-2/5 border-2 rounded-xl border-[#42275a] h-40 sm:h-48 md:h-56 lg:h-64 w-full mt-4 md:mt-0 py-2 sm:py-4">
                        <img src="/images/topbanner.png" alt="AI" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}