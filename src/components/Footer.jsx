import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
      <div className=" w-[90%] lg:w-[80%] mx-auto  py-16">
        <div className=" flex-col gap-5 lg:gap-0 lg:flex-row flex justify-between">
          <div>
            <h1 className=" uppercase  text-xl  font-bold text-gray-300  mb-4">
              Rex atuzie
            </h1>

            <p className=" text-gray-400 text-sm lg:max-w-lg">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>

          <div>
            <h1 className=" uppercase  text-xl  font-bold text-gray-300  mb-4">
              SOCIALS
            </h1>

            <div className=" text-gray-400 flex gap-6 ">
              <a
                href="https://www.linkedin.com/in/rex-atuzie-0ab678205/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://twitter.com/AtuzieR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </a>

              <a
                href="https://github.com/mr-atuzie/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://youtube.com/@atuzierex?si=oPuHj02gvuOV5X9F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <hr className=" w-full my-6  " />

        <p className=" text-center text-xs text-gray-500">
          © Copyright 2024 . Made by{" "}
          <span className=" underline font-semibold">Rex Atuzie</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
