import React, { useState } from "react";
import ApiCommonSidebar from "../../../Layout/Api-Common-Sidebar";
import { MdHome } from "react-icons/md";
import Breadcrumb from "../../../../common/breadcrumb";

const Listallagentbuilderjobs = () => {
  const [selectedLang, setSelectedLang] = useState("curl");

  const apiCommands = {
    curl: "curl -L -X GET 'https://api.swarmnode.ai/v1/agent-builder-jobs/' \\\n-H 'Accept: application/json' \\\n-H 'Authorization: Bearer <TOKEN>'",
    python:
      "import requests\nheaders = {'Accept': 'application/json', 'Authorization': 'Bearer <TOKEN>'}\nresponse = requests.get('https://api.swarmnode.ai/v1/agent-builder-jobs/', headers=headers)\nprint(response.json())",
    go: 'package main\nimport (\n    "fmt"\n    "net/http"\n)\nfunc main() {\n    req, _ := http.NewRequest("GET", "https://api.swarmnode.ai/v1/agent-builder-jobs/", nil)\n    req.Header.Add("Accept", "application/json")\n    req.Header.Add("Authorization", "Bearer <TOKEN>")\n    res, _ := http.DefaultClient.Do(req)\n    defer res.Body.Close()\n    fmt.Println(res)}',
    nodejs:
      "const axios = require('axios');\naxios.get('https://api.swarmnode.ai/v1/agent-builder-jobs/', { headers: { Accept: 'application/json', Authorization: 'Bearer <TOKEN>' } })\n.then(response => console.log(response.data))\n.catch(error => console.error(error));",
    ruby: "require 'net/http'\nrequire 'uri'\nuri = URI('https://api.swarmnode.ai/v1/agent-builder-jobs/')\nrequest = Net::HTTP::Get.new(uri)\nrequest['Accept'] = 'application/json'\nrequest['Authorization'] = 'Bearer <TOKEN>'\nresponse = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) { |http| http.request(request) }\nputs response.body",
    csharp:
      'using System;\nusing System.Net.Http;\nusing System.Threading.Tasks;\nclass Program {\n    static async Task Main() {\n        using var client = new HttpClient();\n        client.DefaultRequestHeaders.Add("Accept", "application/json");\n        client.DefaultRequestHeaders.Add("Authorization", "Bearer <TOKEN>");\n        var response = await client.GetStringAsync("https://api.swarmnode.ai/v1/agent-builder-jobs/");\n        Console.WriteLine(response);\n    }\n}',
    php: "<?php\n$curl = curl_init();\ncurl_setopt($curl, CURLOPT_URL, 'https://api.swarmnode.ai/v1/agent-builder-jobs/');\ncurl_setopt($curl, CURLOPT_HTTPHEADER, array('Accept: application/json', 'Authorization: Bearer <TOKEN>'));\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);\n$response = curl_exec($curl);\ncurl_close($curl);\necho $response;\n?>",
    java: 'import java.io.*;\nimport java.net.*;\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        URL url = new URL("https://api.swarmnode.ai/v1/agent-builder-jobs/");\n        HttpURLConnection conn = (HttpURLConnection) url.openConnection();\n        conn.setRequestMethod("GET");\n        conn.setRequestProperty("Accept", "application/json");\n        conn.setRequestProperty("Authorization", "Bearer <TOKEN>");\n        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));\n        String inputLine;\n        StringBuffer content = new StringBuffer();\n        while ((inputLine = in.readLine()) != null) {\n            content.append(inputLine);\n        }\n        in.close();\n        System.out.println(content.toString());\n    }\n}',
  };
  return (
    <>
      <ApiCommonSidebar>
        <div className="flex gap-2">
          <div className="min-h-screen p-6 w-[90%] md:w-[70%] lg:w-[60%] mx-auto mt-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2">
              <MdHome className="text-xl" />
              <span className="text-sm">›</span>
              <Breadcrumb title="Resources" />
              <span className="text-sm">›</span>
              <Breadcrumb title="Agent Builder Jobs" />
             
              <span className="text-sm">›</span>
              <Breadcrumb title="List all agent builder jobs" />
             
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold mt-6">
              List all agent builder jobs
            </h1>

            {/* API Endpoint */}
            <div className="bg-gray-800 p-4 rounded-lg mt-4 flex items-center">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm mr-3">
                GET
              </span>
              <code className="text-gray-200 text-sm">
                https://api.swarmnode.ai/v1/agent-builder-jobs/
              </code>
            </div>

            {/* Description */}
            <p className="mt-4">
              Returns a list of agent builder jobs. Can be filtered by{" "}
              <span className="bg-gray-700 text-gray-100 px-2 py-1 rounded-md text-sm">
                agent_id
              </span>
              .
            </p>

            {/* Request Section */}
            <h2 className="text-2xl font-semibold mt-8">Request</h2>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Query Parameters</h3>
              <div className="bg-gray-800 p-3 rounded-lg mt-2">
                <span className="text-blue-400">agent_id</span>{" "}
                <span className="text-gray-400">uuid</span>
              </div>
            </div>
    <div className="flex justify-between">
    <div>

            <h2 className="text-2xl font-semibold mt-8">Responses</h2>
            <button className="bg-blue-700 text-white px-3 py-1 rounded-md mt-2">
              APPLICATION/JSON
            </button>
    </div>
            <div className="mt-4 flex items-end ">
              <span className="bg-green-500 text-white px-3 py-1 rounded-md text-sm ">
                200
              </span>
            </div>
            </div>
            <div className="mt-4 bg-gray-800 p-4 rounded-lg">
              <button className="bg-gray-700 px-3 py-1 text-white rounded-md">
                Schema
              </button>
              <p className="text-gray-400 text-sm mt-2">
                Example (from schema)
              </p>
            </div>

            {/* Schema Table */}
            <div className="mt-4 bg-gray-900 p-4 rounded-lg">
              <p className="text-gray-300">SCHEMA</p>
              <ul className="mt-2 text-gray-400 text-sm ">
                <li>
                  <span className="text-white">total_count</span> integer
                </li>
                <li className="mt-3">
                  <span className="text-white">current_page</span> integer
                </li>
                <li className="mt-4">
                  <span className="text-white">next</span> uri{" "}
                  <span className="text-blue-400">NULLABLE</span>
                </li>
                <li className="mt-4">
                  <span className="text-white">previous</span> uri{" "}
                  <span className="text-blue-400">NULLABLE</span>
                </li>
                <li className="mt-4">
                  <span className="text-white">results</span>{" "}
                  <span className="text-blue-400">Object []</span>
                </li>
              </ul>
            </div>

           

            <div className="mt-10 flex justify-between items-center">
              <a
                href="/introduction"
                className="border border-blue-400 flex flex-col  items-start w-[300px] px-5 py-3 rounded-lg text-lg font-[500] transition-all"
              >
                <span
                  className=" text-sm
  "
                >
                  « Previous
                </span>
                <span className="text-blue-400"> Authentication</span>
              </a>

              <a
                href="#"
                className="border border-blue-400 flex flex-col justify-end items-end w-[300px] px-5 py-3 rounded-lg text-lg font-[500] transition-all"
              >
                <span
                  className=" text-sm
  "
                >
                  Next:
                </span>
                <span className="text-blue-400">
                Retrieve an agent builder job »
                </span>
              </a>
            </div>
          </div>

          <div className="lg:w-[40%] mx-auto">
            <div className="bg-gray-800 p-4 rounded-lg mt-4">
              <div className="flex space-x-2 mb-4 overflow-auto no-scrollbar pb-4">
                {Object.keys(apiCommands).map((lang) => (
                  <button
                    key={lang}
                    className={`px-3 py-1 rounded-md text-sm ${
                      selectedLang === lang
                        ? "bg-blue-600 text-white"
                        : "bg-gray-700 text-gray-300"
                    }`}
                    onClick={() => setSelectedLang(lang)}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <pre className="bg-gray-900 text-gray-300 p-3 rounded-md text-sm overflow-auto">
                {apiCommands[selectedLang]}
              </pre>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg mt-4">
              {/* API Method and URL */}
              <div className="flex items-center mb-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm mr-3">
                  GET
                </span>
                <code className="text-gray-200 text-sm">
                  https://api.swarmnode.ai/v1/agent-builder-jobs/
                </code>
              </div>

              {/* cURL Command Block */}
              <pre className="bg-gray-900 text-gray-300 p-3 rounded-md text-sm">
                {`curl -L -X GET 'https://api.swarmnode.ai/v1/agent-builder-jobs/' \\
-H 'Accept: application/json' \\
-H 'Authorization: Bearer <TOKEN>'`}
              </pre>

              {/* API Request Form */}
              <div className="mt-4">
                <label className="block text-gray-400 text-sm mb-1">
                  Bearer Token
                </label>
                <input
                  type="text"
                  placeholder="Enter your token"
                  className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none"
                />
              </div>

              {/* Send Request Button */}
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
                Send API Request
              </button>

              {/* Response Section */}
              <div className="mt-4 p-3 bg-gray-900 text-gray-300 rounded-md text-sm">
                Click the{" "}
                <span className="bg-gray-700 px-2 py-1 rounded-md">
                  Send API Request
                </span>{" "}
                button above to see the response here!
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </ApiCommonSidebar>
    </>
  );
};

export default Listallagentbuilderjobs;
