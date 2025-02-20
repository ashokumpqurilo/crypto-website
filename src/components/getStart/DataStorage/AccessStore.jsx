import React from 'react';
import CodeBlock from '../../../common/CodeBlock';
 

const AccessStore = () => {
  return (
    <div className="bg-white p-6 " id="access-store">
      <h2 className="text-2xl font-bold mb-4">Access a store</h2>
      
      <p className="mb-4 text-gray-700">
        Store that is attached to an agent can be accessed via the{' '}
        <code className="bg-gray-100 px-1 rounded">store</code> argument of the{' '}
        <code className="bg-gray-100 px-1 rounded">main</code> function:
      </p>

      <CodeBlock content={`def main(request, store):
    print(store.items())`} />
    </div>
  );
};

export default AccessStore; 