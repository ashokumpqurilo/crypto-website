import React from 'react'
import CodeBlock from '../../../common/CodeBlock';

const ListStores = () => {
    return (
        <div className="bg-white text-black p-8 min-h-screen">
          <h1 className="text-5xl font-bold">List all stores


          </h1>
    
          <div className="mt-6">
            <div className="  p-4 rounded mt-2">
              <CodeBlock
                content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

swarmnode.Store.list()`}
              />
            </div>
          </div>
          <p className="mb-7 ">
          Returns a PagePaginatedResource object.

</p>
        </div>
      );
}

export default ListStores