import React from 'react';
import CodeBlock from '../../../common/CodeBlock';

const Request = () => {
  return (
    <div className="bg-white p-6 " id="request">
      <h2 className="text-2xl font-bold mb-4">Request</h2>
      
      <p className="mb-4 text-gray-700">
        As mentioned above, the <code className="bg-gray-100 px-1 rounded">main</code> function can have either zero parameters or two parameters: <code className="bg-gray-100 px-1 rounded">request</code> and <code className="bg-gray-100 px-1 rounded">store</code>. <code className="bg-gray-100 px-1 rounded">request</code> is an object with two attributes: <code className="bg-gray-100 px-1 rounded">scheduled</code> and <code className="bg-gray-100 px-1 rounded">payload</code>.
      </p>

      <p className="mb-4 text-gray-700">
        <code className="bg-gray-100 px-1 rounded">scheduled</code> is a boolean that indicates whether the execution was scheduled or manual:
      </p>

      <CodeBlock content={`def main(request, store):
    if request.scheduled:
        print("This execution was scheduled")
    else:
        print("This execution was manual")`} />
    </div>
  );
};

export default Request;
