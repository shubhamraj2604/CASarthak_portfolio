import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
           <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/sarthak-modi-9579a5184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
           <FaInstagram size={20} />
        </>
      ),
      href: "https://www.instagram.com/modi_sarthak3/profilecard/?igsh=NXM4N2o3N29ucGVq",
    },
    {
      id: 3,
      child: (
        <>
           <HiOutlineMail size={20} />
        </>
      ),
      href: "mailto:modisarthak3@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
         Resume-  <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div
      id="Contact"
      className="w-full max-h bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="max-w-screen-lg flex flex-col p-4 mx-auto justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>

   <div className="flex justify-center items-center">
  <form
    action="https://docs.google.com/forms/d/e/1FAIpQLSd1ANoJeyneSdqKAsR9F1PYpaPWK1mNUQF77gK61WUcP_r5xw/formResponse"
    method="POST"
    target="_blank"
    className="flex flex-col w-full md:w-4/4"
  >
    <input
      type="text"
      name="entry.888482697" // Replace with the correct entry ID for 'Name'
      placeholder="Enter your Name"
      className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
      required
    />
    <input
      type="email"
      name="entry.1450753258" // Replace with the correct entry ID for 'Email'
      placeholder="Enter your Email"
      className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
      required
    />
    <textarea
      name="entry.1531756642" // Replace with the correct entry ID for 'Message'
      placeholder="Enter your Description"
      rows="5"
      className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
      required
    ></textarea>
    <button
      type="submit"
      className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
    >
      Let's Talk
    </button>
  </form>
</div>
<div className="ml-6 text-xl lg:hidden inline border-b-2  border-yellow-500 w-[200px] ">
  Connect me at:
</div>


        {/* Social Links - Visible Only on Small Devices */}
        <div className="flex flex-row flex-wrap md:hidden mt-5 ml-6 space-y-1 items-center">
          {links.map(({ id, child, href, style, download }) => (
            <a
              key={id}
              href={href}
              className={`flex  justify-left w-20 px-2 py-2 rounded-md hover:bg-gray-600 transition-colors text-yellow-300 ${style}`}
              target="_blank"
              rel="noopener noreferrer"
              download={download}
            >
              {child}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
