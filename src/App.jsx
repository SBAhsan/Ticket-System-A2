import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Tickets from "./components/Tickets/Tickets";

function App() {
  const ticketsLink = fetch('/public/tickets.json').then(res => res.json());

  const [taskStatus, setTaskStatus] = useState([]);

  const handleTaskStatus = (ticket) => {
    console.log(ticket);
  }
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      
      <Suspense fallback={"Loading..."}>
        <Tickets ticketsLink={ticketsLink} handleTaskStatus={handleTaskStatus}></Tickets>
      </Suspense>
    </div>
  );
}

export default App;
