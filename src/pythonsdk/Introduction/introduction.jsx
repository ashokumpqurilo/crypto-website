import CodeBlock from "../../common/CodeBlock";

const Introduction = () => {
  return (
    <div className="bg-white text-black p-8 min-h-screen">
      <h1 className="text-4xl font-bold">Introduction</h1>
      <p className="mt-4 text-lg">
        Welcome to the SwarmNode Python SDK! The SDK provides a simple interface to interact with the
        <a href="#" className="text-blue-400"> SwarmNode REST API</a>.
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <p className="mt-2 text-lg">You can install the SDK via <code className="bg-white px-2 py-1 rounded">pip</code>:</p>
        <div className="  p-4 rounded mt-2">
        <CodeBlock
          content={`pip install swarmnode`}
        />
         </div>
      </div>
      <div className="mt-">
        <p className="text-lg">Once installed, you can use it to make requests:</p>
        <div className=" p-4 rounded mt-4 text-pink-400">
        <CodeBlock
          content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

agent = swarmnode.Agent.retrieve(id="15d19ca3-26f1-4adb-9cea-3955b73d9b4e")

execution = agent.execute()`}
        />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
