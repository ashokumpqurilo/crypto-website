import React from 'react'
import CodeBlock from '../../../common/CodeBlock';

const UpdateStore = () => {
    return (
        <div className="bg-white text-black p-8 min-h-screen">
          <h1 className="text-5xl font-bold">Update a store


          </h1>
    
          <div className="mt-6">
            <div className="  p-4 rounded mt-2">
              <CodeBlock
                content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

swarmnode.Store.update(name="Updated name")`}
              />
            </div>
          </div>
          <p className='mt-4'>The following fields can be updated: name.

</p>
          <p className="mt-7 ">
          Returns a Store object.

</p>
        </div>
      );
}

export default UpdateStore