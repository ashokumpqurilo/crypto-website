 
const Authentication = () => {
  return (
    <div className="bg-white text-white min-h-screen flex flex-col items-center p-6"> 
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl font-bold mb-9 text-black">Authentication</h1>
        <p className="text-black mb-4">
          The Python SDK uses API keys for authentication. Visit your{' '}
          <a href="#" className="text-blue-500 underline">API keys</a> page to generate an API key.
        </p>
        <p className="mt-5 text-black">Set your API key as outlined below:</p>

        <div className="bg-gray-800  p-4 rounded-lg text-sm font-mono mb-6 mt-7 ">
          <pre className="leading-10">
            <code className="text-purple-400">import</code> swarmnode
            <br />
            swarmnode.api_key = <span className="text-yellow-500">"YOUR_API_KEY"</span>
          </pre>
        </div>

        <p className="mb-7 text-black">
          After setting your API key, you can use the SDK to make authenticated requests.
        </p>
        <div className="bg-gray-800 p-4 rounded-lg text-sm font-mono mb-8">
          <pre>
            agents = swarmnode.Agent.list()
          </pre>
        </div>

        <div className="flex justify-between">
          <button className="bg-gray-700 px-4 py-2 rounded-lg text-blue-400">
            &laquo; Introduction
          </button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg text-blue-400">
            Pagination &raquo;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
