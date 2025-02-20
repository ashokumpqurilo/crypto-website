import React, { useState } from "react";
import MarketplaceSidebarCommon from "../Layout/marketplaceSidebar";
import { useNavigate } from "react-router-dom";

const bounties = [
  { reward: "4000 SNAI", title: "Cost Basis AI Bot", description: "In layman's terms, I would like a bot that people can connect their wallet to and get an average cost basis for the positions (coins) that they hold within the account." },
  { reward: "1000 SNAI", title: "Jobseeker", description: "Crypto Twitter Sentiment Monitor I'm looking for an AI agent that can analyze job seekers and job offer Twitter's sentiment and detect changing trends over time." },
  { reward: "2000 SNAI", title: "Seeking Developer: AI Research Terminal with Blockchain Analytics", description: "Develop a local terminal application with chat interface that combines AI capabilities." },
  { reward: "1000 SNAI", title: "agent", description: "I want an agent which can give short motivational speeches, like dolos the bully type but motivational." }
];

const templates = [
  { title: "Solscan Token Analyzer", description: "Analyze Solana token holders and their activities. It connects to Solscan's API to fetch detailed data about a specific token and its top holders." },
  { title: "Jupiter trader Sol", description: "Sol trader needs work" },
  { title: "Crypto Twitter Sentiment Monitor", description: "Uses Tweepy library to fetch tweets with mentioned accounts and analyze their sentiment." }
];

const App = () => {
  const [selectedBounty, setSelectedBounty] = useState(null);
    const navigate = useNavigate()
  return (
    <MarketplaceSidebarCommon>

    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <section>
        <h2 className="text-2xl font-bold">Bounties</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mt-4">
          {bounties.map((bounty, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer" onClick={() => setSelectedBounty(bounty)}>
              <h3 className="text-green-400 font-bold">{bounty.reward}</h3>
              <h4 className="mt-2 font-semibold">{bounty.title}</h4>
              <p className="text-gray-400 text-sm mt-2">{bounty.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mt-8">
        <h2 className="text-2xl font-bold">Templates</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
          {templates.map((template, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h4 className="text-blue-400 font-semibold">{template.title}</h4>
              <p className="text-gray-400 text-sm mt-2">{template.description}</p>
              <div className="flex justify-between mt-4">
                <button className="text-blue-400">View</button>
                <button className="bg-blue-500 px-3 py-1 rounded text-white" onClick={()=>navigate("/marketplace")}>Use Template</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedBounty && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md">
            <h3 className="text-green-400 font-bold">{selectedBounty.reward}</h3>
            <h4 className="mt-2 font-semibold">{selectedBounty.title}</h4>
            <p className="text-gray-400 text-sm mt-2">{selectedBounty.description}</p>
            <button onClick={() => setSelectedBounty(null)} className="mt-4 bg-red-500 px-3 py-1 rounded text-white">Close</button>
          </div>
        </div>
      )}
    </div>
    </MarketplaceSidebarCommon>

  );
};

export default App;
