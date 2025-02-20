import React from 'react';
import CodeBlock from '../../../common/CodeBlock';
 

const UseStore = () => {
  return (
    <div className="bg-white p-6 " id="use-store">
      <h2 className="text-2xl font-bold mb-4">Use a store</h2>
      
      <p className="mb-4 text-gray-700">
        <code className="bg-gray-100 px-1 rounded">store</code> is a dict-like object. Here's how it can be used:
      </p>

      <CodeBlock content={`def main(request, store):
    # get the value of "color"
    color = store["color"]

    # set the value of "color" to "red"
    store["color"] = "red"

    # delete "color"
    del store["color"]

    # iterate over all keys
    for key in store
        print(key)

    # get the number of keys in store
    length = len(store)

    # check if "color" is in store
    if "color" in store:
        print("color is in store")

    # get the value of "color", or the default value "red" if "color" is not in store
    color = store.get("color", "red")

    # get all key-value pairs in store
    for key, value in store.items():
        print(f"{key}: {value}")

    # get all keys in store
    for key in store.keys():
        print(key)

    # get all values in store
    for value in store.values():
        print(value)

    # delete all keys in store
    store.clear()`} />
    </div>
  );
};

export default UseStore; 