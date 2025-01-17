import React from "react";
import second from "../assets/hero.jpg";
import 'animate.css';

const Home = () => {
  return (
    <div
      id="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full 
        px-4 md:flex-row text-white"
      >
        <div className="animate__animated animate__fadeInLeft">
          <h1 className="animate__animated animate__bounce  animate__delay-2 text-4xl sm:text-7xl font-bold text-white">
            Hii, I am <p className="text-yellow-300 font-extrabold">Sarthak Modi</p>
          </h1>
          <h2 className="animate__animated animate__zoomIn  text-gray-500 font-extrabold text-2xl py-4 max-w-md">
            Chartered Accountant
          </h2>
        </div>

        <div>
          <img
            src={second}
            alt="profilepic"
            className="animate__animated animate__fadeInRight rounded-2xl border-4 border-yellow-600  border-solid mx-auto w-2/3   md:w-2/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
