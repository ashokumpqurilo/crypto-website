import React from "react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";

const RetrieveAllStores = () => {
  const schemaData = {
    title: "Retrieve a store",
    request: {
      queryParameters: [{ name: "id", type: "uuid", required: true }],
      type: "Path Parameters",
    },
    response: {
      status: 200,
      description: "Success",
    },
    method: "GET",
    endpoint: "https://api.swarmnode.ai/v1/stores/:id/",
    description: "Returns a list of stores.",

    code: `{
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "name": "string",
  "data": {},
  "created": "2024-12-28T11:16:10.054Z"
}`,
    mainFields: [
      { name: "id", type: "uuid", required: true },
      { name: "name", type: "string", required: true },
      ,
      { name: "created", type: "date-time", required: true },
    ],
    data: {
      type: "object",
      fields: [],
    },
  };
  return (
    <div className="flex w-[80%] ">
      <Schema
        schemaData={schemaData}
      />
      <RightSide />
    </div>
  );
};

export default RetrieveAllStores;
