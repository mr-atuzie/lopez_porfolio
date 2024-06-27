import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
// import resume from "../assets/fs.pdf";
import logo from "../assets/me.jpg";

import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 3, link: "About" },
    { id: 2, link: "projects" },
    { id: 5, link: "Contact" },
  ];

  return (
    <nav className="  w-full sticky top-0  z-50 py-3 lg:py-4 bg-[#141414]">
      <div className="w-[90%] lg:w-[80%] mx-auto flex justify-between items-center">
        <div className=" flex items-center gap-3">
          <img
            src={logo}
            alt=""
            className=" h-[40px] w-[40px] lg:w-[50px] lg:h-[50px] object-cover rounded-full"
          />
          <h1 className=" uppercase text-gray-300  text-lg lg:text-xl  font-bold  ">
            Rex atuzie
          </h1>
        </div>

        <ul className="hidden lg:flex gap-8">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className=" text-gray-300  cursor-pointer font-bold  uppercase text-xl"
              >
                <Link>{link}</Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setNav(!nav)}
          className=" text-gray-300 cursor-pointer  md:hidden"
        >
          {nav ? <IoCloseOutline size={30} /> : <HiOutlineBars3 size={30} />}
        </button>
      </div>

      {/*

      <div className="hidden md:flex">
        <a
          className=" rounded-full  bg-black text-white px-4 py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
          href={resume}
          download
        >
          Download Resume
        </a>
      </div>

     

      {nav && (
        <div className=" z-30 duration-300 flex flex-col fixed  shadow-md bg-gray-50 top-0 right-0  w-[90vw] h-screen">
          <div className=" bg-white p-4 flex justify-between items-center">
            <div>
              <h1 className="  text-xl lg:text-5xl font-semibold ">
                Rex atuzie
              </h1>
              <p className=" text-gray-500 font-medium text-xs">
                Frontend Developer
              </p>
            </div>
            <div
              onClick={() => setNav(!nav)}
              className=" cursor-pointer  p-4 md:hidden"
            >
              {nav ? (
                <IoCloseOutline size={30} />
              ) : (
                <HiOutlineBars3 size={30} />
              )}
            </div>
          </div>
          <ul className=" mt-11 ">
            {links.map(({ id, link }) => {
              return (
                <li
                  key={id}
                  className=" px-4 cursor-pointer capitalize  mb-5  hover:scale-105 duration-200"
                >
                  <Link
                    onClick={() => setNav(false)}
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            className=" m-4 rounded-full  bg-black text-white px-4 py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
            href={resume}
            download
          >
            Download Resume
          </a>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
