import React from 'react';
import { FaHeart } from "react-icons/fa";

const Copyright = () => {
  return (
    <div className='w-full flex justify-center items-center bg-gray-800 text-white p-2'>
      <p className='flex items-center font-light text-gray-400 italic'>
        Crafted with <FaHeart className='text-yellow-500 mx-1' /> By <a href="https://www.instagram.com/_shubham_raj30?igsh=NHh5cXM4dWVncjln">_shubham_raj30</a>
      </p>
    </div>
  );
};

export default Copyright;
