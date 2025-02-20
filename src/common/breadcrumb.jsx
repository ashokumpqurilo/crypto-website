import React from 'react'
import { MdHome } from 'react-icons/md'

const Breadcrumb = ({title}) => {
  return (
        <>
        <div className="flex items-center gap-2">
                <button className="bg-gray-700 px-3 py-1 rounded-lg text-sm text-white">
                  {title}
                </button>
              </div>
        </>
  )
}

export default Breadcrumb