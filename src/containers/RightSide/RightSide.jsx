import React, { useState } from "react";
import bash from "../../assets/tech/bash.svg";
import python from "../../assets/tech/python.svg";
import go from "../../assets/tech/go.svg";
import nodejs from "../../assets/tech/nodejs.svg";
import ruby from "../../assets/tech/ruby.svg";
import csharp from "../../assets/tech/csharp.svg";
import php from "../../assets/tech/php.svg";
import java from "../../assets/tech/java.svg";
import powershell from "../../assets/tech/windows.svg";
import ReqRes from "./ReqRes";
import CodeBlock from "../../common/CodeBlock";
const languages = [
  { id: "curl", icon: bash, name: "CURL" },
  { id: "python", icon: python, name: "PYTHON" },
  { id: "go", icon: go, name: "GO" },
  { id: "nodejs", icon: nodejs, name: "NODEJS" },
  { id: "ruby", icon: ruby, name: "RUBY" },
  { id: "csharp", icon: csharp, name: "CSHARP" },
  { id: "php", icon: php, name: "PHP" },
  { id: "java", icon: java, name: "JAVA" },
  { id: "powershell", icon: powershell, name: "POWERSHELL" },
];

const subTabs = {
  curl: ["CURL"],
  python: ["REQUESTS", "HTTP.CLIENT"],
  nodejs: ["AXIOS", "NATIVE", "REQUEST", "UNIREST"],
  go: ["NATIVE"],
  nodejs: ["AXIOS", "NATIVE", "REQUEST", "UNIREST"],
  ruby: ["NET::HTTP"],
  csharp: ["RESTSHARP", "HTTPCLIENT"],
  php: ["CURL", "GUZZLE", "PECL_HTTP", "HTTP_REQUEST2"],
  java: ["OKHTTP", "UNIREST"],
  powershell: ["RESTMETHOD"],
};

const RightSide = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("curl");
  const [selectedSubTab, setSelectedSubTab] = useState("");

  const codeExamples = {
    curl: `curl -L -X GET 'https://api.swarmmode.ai/v1/agents/' \\
-H 'Accept: application/json' \\
-H 'Authorization: Bearer <TOKEN>'`,
    python: {
      REQUESTS: `import requests

url = "https://api.swarmmode.ai/v1/agents/"

payload={}
headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer <TOKEN>'
}

response = requests.request("GET", url, headers=headers)`,
      "HTTP.CLIENT": `import http.client

conn = http.client.HTTPSConnection("api.swarmnode.ai")
payload = ''
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer <TOKEN>'
}
conn.request("GET", "/v1/agent-executor-cron-jobs/", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`,
    },
    go: {
      NATIVE: `package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.swarmnode.ai/v1/agents/"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Accept", "application/json")
  req.Header.Add("Authorization", "Bearer <TOKEN>")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}`,
    },
    nodejs: {
      AXIOS: `const axios = require('axios');

let config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'https://api.swarmnode.ai/v1/agents/',
  headers: { 
    'Accept': 'application/json', 
    'Authorization': 'Bearer <TOKEN>'
  }
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});`,
      NATIVE: `const https = require('follow-redirects').https;
const fs = require('fs');

let options = {
  'method': 'GET',
  'hostname': 'api.swarmnode.ai',
  'path': '/v1/agents/',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer <TOKEN>'
  },
  'maxRedirects': 20
};

const req = https.request(options, (res) => {
  let chunks = [];

  res.on("data", (chunk) => {
    chunks.push(chunk);
  });

  res.on("end", (chunk) => {
    let body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", (error) => {
    console.error(error);
  });
});

req.end();`,
      REQUEST: `const request = require('request');
let options = {
  'method': 'GET',
  'url': 'https://api.swarmnode.ai/v1/agents/',
  'headers': {
    'Accept': 'application/json',
    'Authorization': 'Bearer <TOKEN>'
  }
};
request(options, (error, response) => {
  if (error) throw new Error(error);
  console.log(response.body);
});`,
      UNIREST: `const unirest = require('unirest');
const req = unirest('GET', 'https://api.swarmnode.ai/v1/agents/')
  .headers({
    'Accept': 'application/json',
    'Authorization': 'Bearer <TOKEN>'
  })
  .end((res) => { 
    if (res.error) throw new Error(res.error); 
    console.log(res.raw_body);
  });`,
    },
    ruby: {
      "NET::HTTP": `require "uri"
require "net/http"

url = URI("https://api.swarmnode.ai/v1/agents/")

https = Net::HTTP.new(url.host, url.port)
https.use_ssl = true

request = Net::HTTP::Get.new(url)
request["Accept"] = "application/json"
request["Authorization"] = "Bearer <TOKEN>"

response = https.request(request)
puts response.read_body`,
    },
    csharp: {
      RESTSHARP: `var options = new RestClientOptions("")
{
  MaxTimeout = -1,
};
var client = new RestClient(options);
var request = new RestRequest("https://api.swarmnode.ai/v1/agents/", Method.Get);
request.AddHeader("Accept", "application/json");
request.AddHeader("Authorization", "Bearer <TOKEN>");
RestResponse response = await client.ExecuteAsync(request);
Console.WriteLine(response.Content);`,
      HTTPCLIENT: `var client = new HttpClient();
var request = new HttpRequestMessage(HttpMethod.Get, "https://api.swarmnode.ai/v1/agents/");
request.Headers.Add("Accept", "application/json");
request.Headers.Add("Authorization", "Bearer <TOKEN>");
var response = await client.SendAsync(request);
response.EnsureSuccessStatusCode();
Console.WriteLine(await response.Content.ReadAsStringAsync());`,
    },
    php: {
      CURL: `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.swarmnode.ai/v1/agents/',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Accept: application/json',
    'Authorization: Bearer <TOKEN>'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;`,
      GUZZLE: `<?php
$client = new Client();
$headers = [
  'Accept' => 'application/json',
  'Authorization' => 'Bearer <TOKEN>'
];
$request = new Request('GET', 'https://api.swarmnode.ai/v1/agents/', $headers);
$res = $client->sendAsync($request)->wait();
echo $res->getBody();`,
      PECL_HTTP: `<?php
$client = new http\Client;
$request = new http\Client\Request;
$request->setRequestUrl('https://api.swarmnode.ai/v1/agents/');
$request->setRequestMethod('GET');
$request->setOptions(array());
$request->setHeaders(array(
  'Accept' => 'application/json',
  'Authorization' => 'Bearer <TOKEN>'
));
$client->enqueue($request)->send();
$response = $client->getResponse();
echo $response->getBody();`,
      HTTP_REQUEST2: `<?php
require_once 'HTTP/Request2.php';
$request = new HTTP_Request2();
$request->setUrl('https://api.swarmnode.ai/v1/agents/');
$request->setMethod(HTTP_Request2::METHOD_GET);
$request->setConfig(array(
  'follow_redirects' => TRUE
));
$request->setHeader(array(
  'Accept' => 'application/json',
  'Authorization' => 'Bearer <TOKEN>'
));
try {
  $response = $request->send();
  if ($response->getStatus() == 200) {
    echo $response->getBody();
  }
  else {
    echo 'Unexpected HTTP status: ' . $response->getStatus() . ' ' .
    $response->getReasonPhrase();
  }
}
catch(HTTP_Request2_Exception $e) {
  echo 'Error: ' . $e->getMessage();
}`,
    },
    java: {
      OKHTTP: `OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("text/plain");
RequestBody body = RequestBody.create(mediaType, "");
Request request = new Request.Builder()
  .url("https://api.swarmnode.ai/v1/agents/")
  .method("GET", body)
  .addHeader("Accept", "application/json")
  .addHeader("Authorization", "Bearer <TOKEN>")
  .build();
Response response = client.newCall(request).execute();`,
      UNIREST: `Unirest.setTimeouts(0, 0);
HttpResponse<String> response = Unirest.get("https://api.swarmnode.ai/v1/agents/")
  .header("Accept", "application/json")
  .header("Authorization", "Bearer <TOKEN>")
  .asString();`,
    },
    powershell: {
      RESTMETHOD: `$headers = New-Object "System.Collections.Generic.Dictionary[[String],[String]]"
$headers.Add("Accept", "application/json")
$headers.Add("Authorization", "Bearer <TOKEN>")

$response = Invoke-RestMethod 'https://api.swarmnode.ai/v1/agents/' -Method 'GET' -Headers $headers
$response | ConvertTo-Json`,
    },
  };

  const getCodeContent = () => {
    const langContent = codeExamples[selectedLanguage];
    if (typeof langContent === "string") return langContent;
    return langContent[selectedSubTab] || Object.values(langContent)[0];
  };

  return (
    <div className="flex flex-col gap-4  h-fit p-6 max-w-[35%]  bg-white ">
      <div className="w-full px-4 flex flex-col h-fit rounded-lg border border-gray-200 shadow gap-4 bg-white py-8">
        {/* Language Tabs */}
        <div className="flex border-b py-2 gap-2 border-gray-700 overflow-x-scroll w-full">
          {languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => {
                setSelectedLanguage(lang.id);
                setSelectedSubTab(subTabs[lang.id]?.[0]);
              }}
              className={`max-w-[80px] min-w-[80px] px-4 py-2 ${
                selectedLanguage === lang.id ? "border border-gray-500 rounded " : ""
              }`}
            >
              <span className="flex flex-col justify-center items-center gap-2">
                <img src={lang.icon} alt={lang.name} className="w-8 h-8" />{" "}
                <div className="text-xs  font-semibold">{lang.name}</div>
              </span>
            </button>
          ))}
        </div>

        {/* SubTabs if available */}
        {subTabs[selectedLanguage] && (
          <div className="flex gap-4 mt-2   ">
            {subTabs[selectedLanguage].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedSubTab(tab)}
                className={`border rounded px-3 py-1 ${
                  selectedSubTab === tab
                    ? "border-gray-500"
                    : "hover:border-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Code Block */}
        <div className=" w-full">
          <CodeBlock content={getCodeContent()} className={'w-full max-h-[400px] overflow-y-auto text-xs'}/>
        </div>
      </div>
      <ReqRes/>
    </div>
  );
};

export default RightSide;
