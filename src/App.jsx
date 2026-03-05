import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Tickets from "./components/Tickets/Tickets";

const ticketsLink = fetch("/public/tickets.json").then((res) => res.json());

function App() {
  const [taskStatus, setTaskStatus] = useState([]);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolveTasks, setResolveTasks] = useState([]);
  const [resolveCount, setResolveCount] = useState(0);

  const handleTaskStatus = (ticket) => {
    const newTasks = [...taskStatus, ticket];
    setTaskStatus(newTasks);
    setInProgressCount(inProgressCount + 1);
  };

  const handleRemoveTaskStatus = (taskId) => {
    console.log("Resolve task clicked");
    const newTasks = taskStatus.filter(task => task.id !== taskId);
    setTaskStatus(newTasks);
    setInProgressCount(inProgressCount - 1);    
  };

  const handleResolveTask = (taskTitle) => {
    const newResolveTasks = [...resolveTasks, taskTitle];
    setResolveTasks(newResolveTasks);
    setResolveCount(resolveCount + 1);
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar></Navbar>
      <Banner inProgressCount={inProgressCount} resolveCount={resolveCount}></Banner>

      <Suspense fallback={"Loading..."}>
        <Tickets
          ticketsLink={ticketsLink}
          taskStatus={taskStatus}
          handleTaskStatus={handleTaskStatus}
          handleRemoveTaskStatus={handleRemoveTaskStatus}
          resolveTasks={resolveTasks}
          handleResolveTask={handleResolveTask}
        ></Tickets>
      </Suspense>
    </div>
  );
}

export default App;
