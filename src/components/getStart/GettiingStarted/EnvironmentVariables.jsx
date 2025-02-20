import React from 'react';
import CodeBlock from '../../../common/CodeBlock';

const EnvironmentVariables = () => {
  return (
    <div className="bg-white p-6 " id="environment-variables">
      <h2 className="text-2xl font-bold mb-4">Environment variables</h2>
      
      <p className="mb-4">
        If your script depends on any environment variables, you need to add them to the environment variables. Each variable should be on a separate line:
      </p>

      <CodeBlock content={`OPENAI_API_KEY=sk-...`} />
    </div>
  );
};

export default EnvironmentVariables; 