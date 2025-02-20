import CodeBlock from "../../../common/CodeBlock";

const ListAllAgent = () => {
  return (
    <div className="bg-white text-black p-8 min-h-screen">
      <h1 className="text-5xl font-bold">List all agent builder jobs</h1>

      <div className="mt-6">
        <div className="  p-4 rounded mt-2">
          <CodeBlock
            content={`import swarmnode

swarmnode.api_key = "YOUR_API_KEY"

swarmnode.AgentBuilderJob.list()`}
          />
        </div>
      </div>
      <p className="mb-7 ">
          After setting your API key, you can use the SDK to make authenticated requests.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg text-sm font-mono mb-8">
          <pre>
            agents = swarmnode.Agent.list()
          </pre>
        </div>
    </div>
  );
};

export default ListAllAgent;
