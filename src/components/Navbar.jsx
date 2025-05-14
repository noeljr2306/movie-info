import { Clapperboard, Github } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="shadow-sm shadow-blue-400/20 p-4 flex justify-between items-center">
      <div className="flex gap-1">
        <Clapperboard className="text-blue-700 w-8 h-8" />
        <p className="text-2xl text-blue-700">MoviePulse</p>
      </div>
      <div>
        <button className="bg-white flex p-2 border rounded-md border-none active:scale-96 transition-all cursor-pointer">
          <Github />
          Github
        </button>
      </div>
    </div>
  );
};

export default Navbar;
