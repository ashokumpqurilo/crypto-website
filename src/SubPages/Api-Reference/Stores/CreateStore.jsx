import React from "react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";

const CreateStore = () => {
  const schemaData = {
    description: "Creates a store.",
    // descriptionCode: "agent_id",
    title: "Create a store",
    method: "POST",
    response: {
      status: 201,
      description: "Success",
    },
    endpoint: "https://api.swarmnode.ai/v1/stores/create/",
    code: `{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "string",
  "data": {},
  "created": "2024-12-28T11:16:10.055Z"
}`,
    request: {
      body: {
        type: "BODY",
        required: true,
        fields: [
          { name: "name", type: "string", required: true },
        ],
      },
    },
    mainFields: [
      { name: "id", type: "uuid", required: true },
      { name: "name", type: "string", required: true },
      
      { name: "start", type: "date-time", required: true },
      { name: "data", type: "object", required: true },
    ],

    logs: {
      type: "object",
      required: true,
      fields: [],
    },
  };
  return (
    <div className="flex w-[80%] ">
      <Schema schemaData={schemaData} />

      <RightSide />
    </div>
  );
};

export default CreateStore;
