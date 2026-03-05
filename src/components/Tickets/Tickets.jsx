import React, { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({
  ticketsLink,
  handleTaskStatus,
  taskStatus,
  handleRemoveTaskStatus,
  handleResolveTask,
  resolveTasks
}) => {
  const tickets = use(ticketsLink);

  console.log(taskStatus);

  return (
    <div className="flex justify-between mt-10">
        {/* customer tickets */}
      <div>
        <h3 className="text-xl font-semibold md:text-start mb-5">
          Customer Tickets
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              ticket={ticket}
              handleTaskStatus={handleTaskStatus}
            ></Ticket>
          ))}
        </ul>
      </div>

      {/* task status and resolve task part */}
      <div>
        {/* task status */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Task Status</h3>
          {taskStatus.length > 0 ? (
            <ul>
              {taskStatus.map((task) => {
                return (
                  <div
                    key={task.id}
                    className="font-semibold w-64 px-4 py-3 shadow-md rounded-md"
                  >
                    <h3 className="mb-3">{task.title}</h3>
                    <button
                      onClick={() => {
                        handleRemoveTaskStatus(task.id);
                        handleResolveTask(task.title);
                      }}
                      className="bg-[#02A53B] text-white w-full rounded-md py-1"
                    >
                      Complete
                    </button>
                  </div>
                );
              })}
            </ul>
          ) : (
            <p className="text-gray-400">
              Select a ticket to add to Task Status
            </p>
          )}
        </div>

        {/* resolved task */}
        <div className="mt-9">
          <h3 className="text-xl font-semibold mb-4">Resolved Task</h3>
          {resolveTasks.length > 0 ? (
            <ul>
              {resolveTasks.map((task, index) => {
                return (
                  <li
                    key={index}
                    className="font-semibold w-64 px-4 py-2 bg-[#E0E7FF] rounded-md"
                  >
                    <h3 className="mb-3">{task}</h3>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="text-gray-400">No resolved tasks yet.</p>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Tickets;
