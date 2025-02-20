import React from 'react';
import CodeBlock from '../../../common/CodeBlock';

const SupportedTypes = () => {
  return (
    <div className="bg-white p-6 " id="supported-types">
      <h2 className="text-2xl font-bold mb-4">Supported types</h2>
      
      <p className="mb-4 text-gray-700">
        When working with <code className="bg-gray-100 px-1 rounded">store</code>, the following rules need to be followed:
      </p>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">The root key must be a string:</h3>
        <CodeBlock content={`store["key"] = "value"
store[1] = "value"  # error`} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Values must be JSON-serializable:</h3>
        <CodeBlock content={`store["key"] = "value"
store["key"] = 1
store["key"] = 1.1
store["key"] = False
store["key"] = {"key": 1}
store["key"] = [1, 2, 3]
store["key"] = None
store["key"] = object()  # error`} />
      </div>
    </div>
  );
};

export default SupportedTypes; 