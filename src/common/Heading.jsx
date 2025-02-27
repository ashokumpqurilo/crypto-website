import React from 'react';

const Heading = ({ title }) => {
  return (
    <div className="flex w-full justify-center items-center gap-4 md:gap-6 mb-6 md:mb-10 px-4">
      <div className="h-[2px] flex-1 bg-white"></div>
      <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold text-white w-auto px-2">
        {title}
      </h1>
      <div className="h-[2px] flex-1 bg-white"></div>
    </div>
  );
};

export default Heading;
