import React from 'react'
import CodeBlock from '../../../common/CodeBlock';

const CreateStore = () => {
    return (
        <div className="bg-white text-black p-8 min-h-screen">
          <h1 className="text-5xl font-bold">Create a store


          </h1>
    
          <div className="mt-6">
            <div className="  p-4 rounded mt-2">
              <CodeBlock
                content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

swarmnode.Store.create(name="My Store")`}
              />
            </div>
          </div>
          <p className="mb-7 ">
          Returns a Store object.

</p>
        </div>
      );
}

export default CreateStore