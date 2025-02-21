import React from 'react'
import Breadcrumb from '../../../common/breadcrumb'
import { BiHome } from 'react-icons/bi'

const Intro = () => {
  return (
    <div  className="bg-white p-6 " id="data-storage">
      <div className='flex'>
      <BiHome />
      {">"} <Breadcrumb title={"Getting Started"} />
      </div>
      <h2 className="text-5xl font-bold mb-8">Data storage</h2>
      
      <p className="mb-4 text-gray-700">
        Stores are key-value databases. A store can be attached to any number of agents. Attachment happens during agent creation. A store that is attached to multiple agents can act as a shared database between them.
      </p>

      <p className="mb-4 text-gray-700">
        A store is persistent and agent deletions have no effect on it. It will keep existing and retain data until you delete it.
      </p>
    </div>
  ) 
}

export default Intro