import React, { use } from "react";
import Ticket from "../Ticket/Ticket";

const Tickets = ({ ticketsLink, handleTaskStatus }) => {
  const tickets = use(ticketsLink);

  return (
    <div>
      <h3 className="text-xl font-semibold md:text-start mt-10 mb-5">Customer Tickets</h3>
      <div className="flex justify-between">
        <ul className="grid grid-cols-2 gap-5">
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} handleTaskStatus={handleTaskStatus}></Ticket>
          ))}
        </ul>
        <div>
            <div>
                <h3 className="text-xl font-semibold">Task Status</h3>
                <p className="text-gray-400">Select a ticket to add to Task Status</p>
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
