import React from "react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";

const UpdateStore = () => {
  const schemaData = {
    description: "Updates a store.",
    // descriptionCode: "agent_id",
    title: "Update a store",
    method: "PATCH",
    response: {
      status: 201,
      description: "Success",
    },
    endpoint: "https://api.swarmnode.ai/v1/stores/:id/update/",
    code: `{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "string",
  "data": {},
  "created": "2024-12-28T11:16:10.055Z"
}`,
    request: {
        queryParameters: [{ name: "id", type: "uuid", required: true }],
        type: "Path Parameters",
      body: {
        type: "BODY",
        fields: [
          { name: "name", type: "string", required: true },
        ],
      },
    },
    mainFields: [
      { name: "id", type: "uuid", required: true },
      { name: "name", type: "string", required: true },
      { name: "data", type: "object", required: true },
      
      { name: "created", type: "date-time", required: true },
    ],
    data: {
        type: "object",
        required: true,
        fields: [],
      },
   
  };

  const type = "QUERY PARAMETERS";
  return (
    <div className="flex w-[80%] ">
      <Schema schemaData={schemaData} />
      <RightSide />
    </div>
  );
};

export default UpdateStore;
