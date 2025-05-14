import Search from "./components/Search";
import Navbar from "./components/Navbar";
import "./index.css";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Navbar />
      <section className="min-h-screen relative sm:px-4 px-12 sm:py-12 py-6">
        <h1>
          Discover <span className="gradient-text">Movies</span> like never
          before without stress
        </h1>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1>{searchTerm}</h1>
      </section>
    </>
  );
}

export default App;
