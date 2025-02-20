import React from 'react'
import CodeBlock from '../../../common/CodeBlock';

const TheExecutionObject = () => {
    return (
        <div className="bg-white text-black p-8 min-h-screen">
          <h1 className="text-5xl font-bold">The Execution object



          </h1>
    
          <div className="mt-6">
            <div className="  p-4 rounded mt-2">
              <CodeBlock
                content={`class Execution:
    id: str
    agent_id: str
    agent_executor_job_id: Optional[str]
    status: Literal["success", "in_progress", "failure", "termination"]
    start: str
    finish: Optional[str]
    logs: List[Dict[str, str]]
    return_value: JSON`}
              />
            </div>
          </div>
          <p className="mb-7 ">
          JSON is a type alias for Union[Dict[str, "JSON"], List["JSON"], str, int, float, bool, None].


</p>
        </div>
      );
}

export default TheExecutionObject