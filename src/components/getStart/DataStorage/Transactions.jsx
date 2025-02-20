import React from 'react';
import CodeBlock from '../../../common/CodeBlock';
 
const Transactions = () => {
  return (
    <div className="bg-white p-6 " id="transactions">
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      
      <p className="mb-4 text-gray-700">
        Stores also have transaction support. Transactions are used to ensure that a set of operations are performed atomically.
      </p>

      <CodeBlock content={`def main(request, store):
    store["color"] = "red"
    store["shape"] = "circle"
    with store.transaction():
        store["color"] = "green"
        some_helper_function()
        store["shape"] = "rectangle"

def some_helper_function():
    raise ValueError()`} />

      <p className="my-4 text-gray-700">
        In the above example, when <code className="bg-gray-100 px-1 rounded">some_helper_function</code> raises 
        an exception, the store will be rolled back to its previous state. This means that the value 
        of <code className="bg-gray-100 px-1 rounded">color</code> will be <code className="bg-gray-100 px-1 rounded">red</code> and 
        the value of <code className="bg-gray-100 px-1 rounded">shape</code> will be <code className="bg-gray-100 px-1 rounded">circle</code>. 
        The value of <code className="bg-gray-100 px-1 rounded">color</code> will not be <code className="bg-gray-100 px-1 rounded">green</code>.
      </p>

      <p className="text-gray-700">
        Transactions can be used to ensure that either all the operations in a transaction are performed or none of them are. 
        This is useful in cases when the operations are dependent on each other. For example, in banking, when transferring 
        money from one account to another, there are two operations that need to be performed: debiting the sender's account 
        and crediting the receiver's account. Either both of these operations need to be performed or none of them should be 
        performed to avoid inconsistencies.
      </p>
    </div>
  );
};

export default Transactions; 