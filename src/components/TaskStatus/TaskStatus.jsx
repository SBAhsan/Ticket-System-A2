import React from "react";

const TaskStatus = ({ task, handleRemoveTaskStatus, handleResolveTask, handleRemovedTicketFromCustomerTickets }) => {
  return (
    <div
      className="font-semibold w-64 px-4 py-3 shadow-md rounded-md"
    >
      <h3 className="mb-3">{task.title}</h3>
      <button
        onClick={() => {
          handleRemoveTaskStatus(task.id);
          handleResolveTask(task.title);
          handleRemovedTicketFromCustomerTickets(task);
        }}
        className="bg-[#02A53B] text-white w-full rounded-md py-1"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;
