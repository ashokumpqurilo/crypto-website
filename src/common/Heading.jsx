import React from 'react'

const Heading = ({title}) => {
  return (
    <div className="flex w-full justify-center items-center gap-6 mb-10">
        <div className="h-[2px] w-auto flex-1 bg-white"></div>
        <h1 className="text-xl lg:text-5xl text-center w-[120px] lg:w-[300px] font-bold text-white">
          {title}
        </h1>
        <div className="h-[2px] flex-1 w-auto bg-white"></div>
      </div>
  )
}

export default Heading