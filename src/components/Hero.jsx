import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <section className=" w-full relative h-[60vh] lg:h-[75vh]">
      <div className=" w-[90%] h-full mx-auto flex justify-center items-center">
        <div className=" max-w-xl text-center">
          <h1 className=" text-3xl lg:text-5xl font-bold text-gray-300">
            HEY, I'M REX ATUZIE
          </h1>

          <p className="  lg:text-xl font-medium my-2 lg:my-4 text-gray-400">
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>

          <button className=" uppercase bg-purple-700 px-8 py-2 lg:py-4 font-semibold rounded text-white text-lg hover:bg-purple-100 hover:text-purple-700  ">
            Projects
          </button>
        </div>

        <div className="hidden lg:flex rounded-r-md  shadow-lg text-gray-100 bg-[#404040] flex-col gap-4 py-6 px-3 absolute left-0">
          <a
            href="https://www.linkedin.com/in/rex-atuzie-0ab678205/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>

          <a
            href="https://twitter.com/AtuzieR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
          </a>

          <a
            href="https://github.com/mr-atuzie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="https://youtube.com/@atuzierex?si=oPuHj02gvuOV5X9F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
