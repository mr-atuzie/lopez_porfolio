import React from "react";
import desktop from "../assets/dopefolio-removebg-preview.png";
// import { BsLink45Deg } from "react-icons/bs";
// import { webPortfolio } from "../data";

const Portfolio = () => {
  return (
    <section name="portfolio" className=" w-full  lg:py-10   ">
      <div className=" mb-5 mx-auto w-[90%]  lg:w-[80%]">
        <div className=" flex flex-col justify-center items-center mb-6 ">
          <div className=" font-bold text-3xl text-gray-300">PROJECTS</div>
          <div className="w-[40px] m rounded-lg h-[4px] bg-purple-600"></div>

          <p className=" text-sm lg:text-xl lg:max-w-2xl text-center my-4 text-gray-400">
            Here you will find some of the personal and clients projects that I
            created
          </p>
        </div>

        <div className=" flex-col  lg:flex-row flex justify-between items-center mb-14">
          <img className=" lg:w-[50%]" src={desktop} alt="" />

          <div className=" lg:w-[45%]">
            <h1 className=" font-bold text-gray-300 text-lg mt-2 lg:text-2xl">
              Investor
            </h1>
            <p className=" my-3 text-gray-400 lg:text-xl">
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className="  rounded uppercase bg-purple-700 text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-purple-100 hover:text-purple-700   ">
              CASE STUDY
            </button>
          </div>
        </div>

        <div className=" flex-col  lg:flex-row flex justify-between items-center mb-14">
          <img className=" lg:w-[50%]" src={desktop} alt="" />

          <div className=" lg:w-[45%]">
            <h1 className=" font-bold text-gray-300 text-lg mt-2 lg:text-2xl">
              Investor
            </h1>
            <p className=" my-3 text-gray-400 lg:text-xl">
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className="  rounded uppercase bg-purple-700 text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-purple-100 hover:text-purple-700   ">
              CASE STUDY
            </button>
          </div>
        </div>

        <div className=" flex-col  lg:flex-row flex justify-between items-center mb-14">
          <img className=" lg:w-[50%]" src={desktop} alt="" />

          <div className=" lg:w-[45%]">
            <h1 className=" font-bold text-gray-300 text-lg mt-2 lg:text-2xl">
              Investor
            </h1>
            <p className=" my-3 text-gray-400 lg:text-xl">
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </p>
            <button className="  rounded uppercase bg-purple-700 text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-purple-100 hover:text-purple-700   ">
              CASE STUDY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
