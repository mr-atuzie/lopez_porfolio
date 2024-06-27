import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
// import resume from "../assets/fs.pdf";
import logo from "../assets/me.jpg";

import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

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
          <li
            onClick={() => navigate("/")}
            className=" text-gray-300  cursor-pointer font-bold  uppercase text-xl"
          >
            HOME
          </li>

          <li className=" text-gray-300  cursor-pointer font-bold  uppercase text-xl">
            <Link
              to={"About"}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className=" text-gray-300  cursor-pointer font-bold  uppercase text-xl">
            <Link
              to={"Projects"}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className=" text-gray-300  cursor-pointer font-bold  uppercase text-xl">
            <Link
              to={"Contact"}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
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

     */}

      {nav && (
        <div className=" z-50 duration-300 py-6 flex flex-col fixed  shadow-lg bg-gray-100 top-[60px] right-0  w-full ">
          <ul className=" w-full flex justify-end uppercase   flex-col items-end">
            <li
              onClick={() => navigate("/")}
              className=" p-3  cursor-pointer font-semibold uppercase underline     hover:scale-105 duration-200"
            >
              Home
            </li>
            <li className=" p-3  cursor-pointer font-semibold uppercase underline    hover:scale-105 duration-200">
              <Link
                onClick={() => setNav(false)}
                activeClass="active"
                to={"About"}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className=" p-3  cursor-pointer font-semibold uppercase underline    hover:scale-105 duration-200">
              <Link
                onClick={() => setNav(false)}
                activeClass="active"
                to={"Projects"}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className=" p-3 cursor-pointer font-semibold uppercase underline    hover:scale-105 duration-200">
              <Link
                onClick={() => setNav(false)}
                activeClass="active"
                to={"Contact"}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
