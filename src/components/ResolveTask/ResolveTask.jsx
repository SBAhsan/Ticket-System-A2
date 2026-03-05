import React from "react";

const ResolveTask = ({task}) => {
  return (
    <li
      className="font-semibold w-64 px-4 py-2 mb-2 bg-[#E0E7FF] rounded-md"
    >
      <h3 className="p-2">{task}</h3>
    </li>
  );
};

export default ResolveTask;
