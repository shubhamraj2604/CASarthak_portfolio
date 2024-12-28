import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home" },
    { id: 2, link: "About Me" },
    { id: 3, link: "Education" },
    { id: 4, link: "WorkExperience" },
    { id: 5, link: "Achievement" },
    { id: 6, link: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50">
      {/* Logo */}
      <div>
        <h1 className="text-5xl text-yellow-300 font-signature ml-2">Sarthak</h1>
      </div>

      {/* Desktop Navbar */}
      <ul className="hidden lg:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-yellow-300 hover:scale-105 duration-200"
          >
            <a href={`#${link}`} onClick={() => setNav(false)}>
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 lg:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* Mobile Navbar */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-4 text-4xl"
            >
              <a href={`#${link}`} onClick={() => setNav(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
