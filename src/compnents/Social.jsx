import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn -
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sarthak-modi-9579a5184?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Instagram-
          <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/modi_sarthak3/profilecard/?igsh=NXM4N2o3N29ucGVq",
    },
    {
      id: 3,
      child: (
        <>
          Mail-
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:modisarthak3@gmail.com ",
    },
    {
      id: 4,
      child: (
        <>
          Resume-
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "Sarthak_Modi_CV.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4  ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] bg-gray-500 bg-transparent " +
              "  " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white ml-1"
              download={download}
              target="_blank"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
      l
    </div>
  );
};

export default Social;
