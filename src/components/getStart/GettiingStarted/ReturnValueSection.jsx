import CodeBlock from '../../../common/CodeBlock';

const ReturnValueSection = () => {
    const pythonExample1 = ``;

    const pythonExample2 = `import swarmnode

swarmnode.api_key = "YOUR_API_KEY"
agent = swarmnode.Agent.retrieve(id="AGENT_ID")
execution = agent.execute()
print(execution.return_value)`;

    return (
      <div className="space-y-4 bg-white p-6 " id="return-value">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Return value <span className="text-blue-500">#</span>
        </h1>
  
        <p className="text-black">
          The return value of the <code className="bg-gray-800 text-white    px-1 py-0.5 rounded">main</code> function must be JSON-serializable:
        </p>
  
        <CodeBlock content={`def main():
    return "Hello world"  # ok

def main():
    return object()  # error`} />
  
        <CodeBlock content={`pythonExample1`} />
  
        <p className="text-black">Return values can be viewed from the UI:</p>
  
        <p className="text-black">
          Return value can also be retrieved via{" "}
          <a href="#" className="text-blue-400 hover:underline">REST API</a>{" "}
          and{" "}
          <a href="#" className="text-blue-400 hover:underline">Python SDK</a>. 
          Here's how to access return value via the SDK:
        </p>
  
        <CodeBlock content={pythonExample2} />
      </div>
    );
  };
  
  export default ReturnValueSection;