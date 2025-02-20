import React from "react";
import CodeBlock from '../../../common/CodeBlock';

const Script = () => {
  return (
    <div className="bg-white p-6 " id="script">
      <h2 className="text-2xl font-bold mb-4">Script</h2>

      <p className="mb-4">
        Write your Python script as you normally would. The only necessity is
        that the script includes a{" "}
        <code className="bg-gray-100 px-1 rounded">def main</code> function,
        which will be executed. The{" "}
        <code className="bg-gray-100 px-1 rounded">main</code> function can also
        have <code className="bg-gray-100 px-1 rounded">request</code> and{" "}
        <code className="bg-gray-100 px-1 rounded">store</code> parameters:
      </p>

      <CodeBlock content={`def main():
    # Your code goes here`} />

      <CodeBlock content={`def main(request, store):
    # Your code goes here`} />

      <p className="mb-4">
        Both approaches are valid. Refer to the{" "}
        <span className="text-blue-500">Request</span> and{" "}
        <span className="text-blue-500">Data Storage</span> sections for more
        information.
      </p>

      <CodeBlock content={`from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage, SystemMessage

def main(request, store):
    """Translate text from one language to another."""
    
    text = request.payload["text"]
    source = request.payload["source"]
    target = request.payload["target"]
    
    model = ChatOpenAI(model="gpt-4o-mini")
    messages = [
        SystemMessage(f"Translate from {source} to {target}"),
        HumanMessage(text),
    ]
    response = model.invoke(messages)
    return response.content`} />
    </div>
  );
};

export default Script;
