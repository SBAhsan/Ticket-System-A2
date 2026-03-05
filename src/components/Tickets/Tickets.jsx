import React, { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ ticketsLink, handleTaskStatus, taskStatus }) => {
  const tickets = use(ticketsLink);

  console.log(taskStatus);

  return (
    <div>
      <h3 className="text-xl font-semibold md:text-start mt-10 mb-5">
        Customer Tickets
      </h3>
      <div className="flex justify-between">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              ticket={ticket}
              handleTaskStatus={handleTaskStatus}
            ></Ticket>
          ))}
        </ul>
        <div>
          <div>
            <h3 className="text-xl font-semibold">Task Status</h3>
            {taskStatus.length > 0 ? (
              <ul>
                {taskStatus.map((task, index) => {
                  return (
                    <div key={index} className="font-semibold w-64 px-4 py-3 shadow-xl">
                      <h3 className="mb-3">{task}</h3>
                      <button className="bg-[#02A53B] text-white w-full rounded-md">
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
          <div className="mt-5">
            <h3 className="text-xl font-semibold">Resolved Task</h3>
            <p className="text-gray-400">No resolved tasks yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
