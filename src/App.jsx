import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Tickets from "./components/Tickets/Tickets";

const ticketsLink = fetch('/public/tickets.json').then(res => res.json());

function App() {
  const [taskStatus, setTaskStatus] = useState([]);

  const handleTaskStatus = (ticketTitle) => {
    const newTasks = [...taskStatus, ticketTitle];
    setTaskStatus(newTasks);
  }
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      
      <Suspense fallback={"Loading..."}>
        <Tickets ticketsLink={ticketsLink} taskStatus={taskStatus} handleTaskStatus={handleTaskStatus}></Tickets>
      </Suspense>
    </div>
  );
}

export default App;
