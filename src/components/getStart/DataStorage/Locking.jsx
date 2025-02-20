import React from 'react';
import CodeBlock from '../../../common/CodeBlock';

const Locking = () => {
  return (
    <div className="bg-white p-6 " id="locking">
      <h2 className="text-2xl font-bold mb-4">Locking</h2>
      
      <p className="mb-4 text-gray-700">
        Locking is also supported. Locking makes sure that only one execution of agent can access the store at a time.
      </p>

      <p className="mb-4 text-gray-700">
        Locking is useful in cases when there are a lot of concurrent requests to a store. This can happen when a single agent is 
        executed in very quick succession or when multiple agents are frequently accessing the same store.
      </p>

      <CodeBlock content={`def main(request, store):
    with store.transaction(lock=True):
        # keep track of the number of times the agent has been run
        store["run"] = store.get("run", 0) + 1
        print(f"run: {store['run']}")`} />

      <p className="my-4 text-gray-700">
        In the above example, if we hadn't used locking, it would have been possible for two agents executed at the same time to 
        read the same value of <code className="bg-gray-100 px-1 rounded">run</code> and increment it, which would have resulted 
        in the value of <code className="bg-gray-100 px-1 rounded">run</code> being incremented in total by 1 instead of 2.
      </p>

      <p className="mb-4 text-gray-700">
        For example, consider the following sequence of events:
      </p>

      <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
        <li>Agent 1 reads the value of <code className="bg-gray-100 px-1 rounded">run</code> (reads 0)</li>
        <li>Agent 2 reads the value of <code className="bg-gray-100 px-1 rounded">run</code> (reads 0)</li>
        <li>Agent 1 increments the value of <code className="bg-gray-100 px-1 rounded">run</code> (writes 1)</li>
        <li>Agent 2 increments the value of <code className="bg-gray-100 px-1 rounded">run</code> (writes 1)</li>
      </ol>

      <p className="mt-4 text-gray-700">
        Locking makes sure that the first agent acquires the lock, increments the value of{' '}
        <code className="bg-gray-100 px-1 rounded">run</code> and releases the lock. Only then can 
        the second agent acquire the lock and increment the value of{' '}
        <code className="bg-gray-100 px-1 rounded">run</code>, which was already incremented by the first agent. This 
        ensures that in total, the value of <code className="bg-gray-100 px-1 rounded">run</code> is incremented by 2, as expected.
      </p>
    </div>
  );
};

export default Locking; 