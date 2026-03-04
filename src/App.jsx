import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
