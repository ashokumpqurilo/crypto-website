import React from 'react'

const Intro = () => {
  return (
    <div  className="bg-white p-6 " id="data-storage">
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