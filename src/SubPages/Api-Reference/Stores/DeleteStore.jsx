import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Schema from "../../../components/common/Schema";
import RightSide from "../../../containers/RightSide/RightSide";

const DeleteStore = () => {
  const schemaData = {
    description: "Deletes a store.",
    // descriptionCode: "agent_id",
    title: "Delete a store",
    method: "DELETE",
    response: {
      status: 204,
      description: "",
    },
    endpoint: "https://api.swarmnode.ai/v1/stores/:id/delete/",
    code: ``,
    request: {
        queryParameters: [{ name: "id", type: "uuid", required: true }],
        type: "Path Parameters",
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

export default DeleteStore;
