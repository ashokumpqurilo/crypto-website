import React from 'react'

const SchemaField = ({ field, nested = false }) => (
    <div className="flex items-center gap-3 w-full justify-between">
      <div className={`flex items-center ${field.options ? "gap-2" : "gap-3"}`}>
        <div className="font-bold relative">
          <div className="absolute -left-[15px] top-[50%] -translate-y-[50%] w-[11px] h-[1.5px] bg-gray-200"></div>
          {field.name}
        </div>
        {!field.options && (
          <span className="text-gray-500 text-nowrap">{field.type}</span>
        )}
      </div>
      <div className="w-full bg-gray-200 h-px"></div>
      {field.nullable && <span className="text-[#0EA5E9] text-xs">NULLABLE</span>}
      {field.required && <span className="text-red-500 text-xs">REQUIRED</span>}
    </div>
  );

export default SchemaField