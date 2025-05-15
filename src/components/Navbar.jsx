import { Github } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <header className="shadow-sm fixed top-0 left-0 z-50 right-0 shadow-blue-400/20 p-4 px-12 flex justify-between items-center bg-zinc-950/50 backdrop-blur-xl">
      <div className="flex gap-1 gradient-text">
        <p className="text-2xl">MoviePulse</p>
      </div>
      <div>
        <button className="bg-white flex p-2 border rounded-md border-none active:scale-96 transition-all cursor-pointer">
          <Github />
          Github
        </button>
      </div>
    </header>
  );
};

export default Navbar;
