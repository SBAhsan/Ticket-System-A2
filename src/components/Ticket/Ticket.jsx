import React from "react";

const Ticket = ({ ticket, handleTaskStatus }) => {
  const { title, status, description, id, priority, customer, createdAt } =
    ticket;
  return (
    <a onClick={() => handleTaskStatus(ticket)}>
      <div className="card w-[450px] bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title">{title}</h2>
            <div
              className={`badge rounded-full py-4 font-semibold
                ${status === "Open" ? "text-green-800" : status === "In Progress" ? "text-yellow-600" : ""}
                 ${status === "Open" ? "bg-green-300" : status === "In Progress" ? "bg-yellow-200" : ""}`}
            >
              <span>
                {status === "Open" ? (
                  <img src="../../../src/assets/Open.png" />
                ) : status === "In Progress" ? (
                  <img src="../../../src/assets/In-progress.png" />
                ) : (
                  ""
                )}
              </span>
              {status}
            </div>
          </div>

          <p>{description}</p>
          <div className="flex justify-between">
            <div className="flex items-baseline gap-2">
              <p>#{id}</p>
              <p>{priority}</p>
            </div>
            <div className="flex items-baseline gap-2">
              <span>{customer}</span>
              <span>{createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Ticket;
