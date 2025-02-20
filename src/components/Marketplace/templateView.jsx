import { useState } from "react";

export default function TemplateView() {
  const [showScript, setShowScript] = useState(false);
  const [showRequirements, setShowRequirements] = useState(true);
  const [showEnvVars, setShowEnvVars] = useState(true);

  return (
    <div className="bg-[#0f172a] text-white min-h-screen py-10 px-4 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Script Section */}
        <div className="bg-[#1e293b] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Script</h3>
            <button
              onClick={() => setShowScript(!showScript)}
              className="bg-blue-600 px-3 py-1 rounded text-sm"
            >
              {showScript ? "Hide" : "Show"}
            </button>
          </div>
          {showScript && (
            <pre className="bg-black p-3 mt-3 rounded text-sm"># Script content here...</pre>
          )}
        </div>

        {/* Requirements Section */}
        <div className="bg-[#1e293b] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Requirements</h3>
            <button
              onClick={() => setShowRequirements(!showRequirements)}
              className="bg-blue-600 px-3 py-1 rounded text-sm"
            >
              {showRequirements ? "Hide" : "Show"}
            </button>
          </div>
          {showRequirements && (
            <pre className="bg-black p-3 mt-3 rounded text-sm">
              requests==2.32.3
              <br />
              langchain
              <br />
              langchain-openai
              <br />
              langchain-core
            </pre>
          )}
        </div>

        {/* Environment Variables Section */}
        <div className="bg-[#1e293b] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Environment variables</h3>
            <button
              onClick={() => setShowEnvVars(!showEnvVars)}
              className="bg-blue-600 px-3 py-1 rounded text-sm"
            >
              {showEnvVars ? "Hide" : "Show"}
            </button>
          </div>
          {showEnvVars && (
            <pre className="bg-black p-3 mt-3 rounded text-sm">
              SOLSCAN_API_KEY=
              <br />
              OPENAI_API_KEY=
              <br />
              # Top N wallets holding that token. Should be 10, 20, 30 or 40.
              <br />
              TOP_N=10
            </pre>
          )}
        </div>

        {/* Solscan Token Analyzer Section */}
        <div className="bg-[#1e293b] p-6 rounded-lg">
          <h2 className="text-xl font-bold">Solscan Token Analyzer</h2>
          <p className="mt-2 text-gray-300">
            Analyze Solana token holders and their activities. It connects to Solscan's API to fetch detailed data about a specific token and its top holders.
          </p>

          <h3 className="mt-4 font-semibold">Fetch Top Token Holders:</h3>
          <p className="text-gray-300">
            Retrieves the top N holders of a given Solana token, where N is configurable.
          </p>

          <h3 className="mt-4 font-semibold">Holder Analysis:</h3>
          <p className="text-gray-300">
            For each holder, it checks their transaction history to determine the type of holder (e.g., long-term or frequent flipper). It also collects data on other tokens they hold.
          </p>

          <h3 className="mt-4 font-semibold">Token Details:</h3>
          <p className="text-gray-300">
            Gathers metadata about the token, like its name, symbol, price, and supply.
          </p>

          <h3 className="mt-4 font-semibold">Activity Summaries:</h3>
          <p className="text-gray-300">
            Compiles a detailed analysis of each holder's behavior and interactions with the token.
          </p>

          <h3 className="mt-4 font-semibold">AI-Powered Summarization:</h3>
          <p className="text-gray-300">
            Uses OpenAI's GPT-based model to generate a human-readable summary of the results, making complex blockchain data easy to digest.
          </p>
        </div>

        {/* Use Template Button */}
        <div className="text-center">
          <button className="bg-blue-600 px-6 py-2 rounded-lg text-lg font-semibold">
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
}
