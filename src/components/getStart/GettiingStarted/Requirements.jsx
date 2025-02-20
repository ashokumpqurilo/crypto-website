import React from 'react';
import CodeBlock from '../../../common/CodeBlock';

const Requirements = () => {
  return (
    <div className="bg-white p-6 " id="requirements">
      <h2 className="text-2xl font-bold mb-4">Requirements</h2>
      
      <p className="mb-4">
        If your script depends on any Python packages, you need to add them to the requirements. Each package should be on a separate line:
      </p>

      <CodeBlock content={`langchain==0.3.11
langchain-core==0.3.24
langchain-openai==0.2.12`} />
    </div>
  );
};

export default Requirements;