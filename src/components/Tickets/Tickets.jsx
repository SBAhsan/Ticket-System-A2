import React, { use } from "react";
import Ticket from "../Ticket/Ticket";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolveTask from "../ResolveTask/ResolveTask";

const Tickets = ({
  ticketsLink,
  handleTaskStatus,
  taskStatus,
  handleRemoveTaskStatus,
  handleResolveTask,
  resolveTasks,
}) => {
  const tickets = use(ticketsLink);

  console.log(taskStatus);

  return (
    <div className="lg:flex lg:justify-between mt-15">
      {/* customer tickets */}
      <div>
        <h3 className="text-xl font-semibold text-center lg:text-start mb-5">
          Customer Tickets
        </h3>
        <div className="flex justify-center">
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {tickets.map((ticket) => (
              <Ticket
                key={ticket.id}
                ticket={ticket}
                handleTaskStatus={handleTaskStatus}
              ></Ticket>
            ))}
          </ul>
        </div>
      </div>

      {/* task status and resolve task part */}
      <div className="mx-8 shadow-md">
        {/* task status */}
        <div>
          <h3 className="text-xl font-semibold mb-4 mt-15 lg:mt-0 text-center lg:text-start">
            Task Status
          </h3>
          <div className="flex justify-center">
            {taskStatus.length > 0 ? (
              <ul>
                {taskStatus.map((task) => (
                  <TaskStatus
                    key={task.id}
                    task={task}
                    handleRemoveTaskStatus={handleRemoveTaskStatus}
                    handleResolveTask={handleResolveTask}
                  ></TaskStatus>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">
                Select a ticket to add to Task Status
              </p>
            )}
          </div>
        </div>

        {/* resolved task */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-center lg:text-start">
            Resolved Task
          </h3>
          <div className="flex justify-center">
            {resolveTasks.length > 0 ? (
              <ul>
                {resolveTasks.map((task, index) => (
                  <ResolveTask key={index} task={task}></ResolveTask>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No resolved tasks yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
