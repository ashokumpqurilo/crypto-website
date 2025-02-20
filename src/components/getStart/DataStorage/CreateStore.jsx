import React from 'react';

const CreateStore = () => {
  return (
    <div className="bg-white p-6 " id="create-store">
      <h2 className="text-2xl font-bold mb-4">Create a store</h2>
      
      <p className="text-gray-700">
        A store can be created from the UI and via{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">REST API</a> and{' '}
        <a href="#" className="text-blue-500 hover:text-blue-600">Python SDK</a>.
      </p>
    </div>
  );
};

export default CreateStore; 