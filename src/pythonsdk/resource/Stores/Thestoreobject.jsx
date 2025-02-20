import React from 'react'
import CodeBlock from '../../../common/CodeBlock';

const Thestoreobject = () => {
    return (
        <div className="bg-white text-black p-8 min-h-screen">
          <h1 className="text-5xl font-bold">The Store object

          </h1>
    
          <div className="mt-6">
            <div className="  p-4 rounded mt-2">
              <CodeBlock
                content={`class Store:
    id: str
    name: str
    data: JSON
    created: str`}
              />
            </div>
          </div>
          <p className="mb-7 ">
          JSON is a type alias for Union[Dict[str, "JSON"], List["JSON"], str, int, float, bool, None].

</p>
        </div>
      );
}

export default Thestoreobject