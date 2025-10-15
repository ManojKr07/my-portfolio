import React from "react";
import { Link } from "react-router-dom";
import MyImage from "../assets/manoj_photo_soft.jpg";
import ToggleTheme from "../components/Toggle";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md 
      bg-white/20 dark:bg-black/20 flex items-center justify-between h-16 px-6 font-serif transition-all duration-300">
      
      {/* Left side: Logo + Name */}
      <div className="flex items-center gap-4">
        <img
          src={MyImage}
          alt="Profile"
          className="h-12 w-12 rounded-full object-cover border border-gray-300 dark:border-gray-600"
        />
        <h1 className="text-xl font-bold text-black drop-shadow-lg">MANOJ K R</h1>
      </div>

      {/* Right side: Nav Links + Theme Toggle */}
      <div className="flex items-center gap-6 text-black drop-shadow-xl text-xl">
        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link to="/projects" className="hover:text-yellow-400 transition">Projects</Link>
        <Link to="/resume" className="hover:text-yellow-400 transition">Resume</Link>

        <ToggleTheme />
      </div>
    </nav>
  );
}

export default NavBar;
