import React from "react";
import desktop from "../assets/dopefolio-removebg-preview.png";
import { useParams } from "react-router-dom";
import { webPortfolio } from "../data";

const Project = () => {
  const { id } = useParams();

  const project = webPortfolio.find((project) => project.id === Number(id));

  return (
    <section>
      <div className=" w-[90%] lg:w-[50%] flex flex-col gap-10 mx-auto mb-10">
        <img className=" " src={desktop} alt="" />
        <div>
          <h1 className=" font-bold text-gray-300 mb-3  text-xl lg:text-3xl">
            Project Overview
          </h1>
          <p className=" text-gray-400 lg:text-lg">{project.desc}</p>
          <p className=" text-gray-400 lg:text-lg my-6 lg:my-9">
            {project.extra}
          </p>
          <p className=" text-gray-400 lg:text-lg">{project.conclusion}</p>
        </div>

        <div>
          <h1 className=" font-bold text-gray-300 mb-3 text-xl  lg:text-3xl">
            Tool used
          </h1>
          <div className=" flex gap-4 flex-wrap">
            {project.stack.map((skill, index) => {
              return (
                <div
                  key={index}
                  className=" bg-gray-100 font-medium text-gray-700 rounded p-2 lg:p-4"
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h1 className=" font-bold text-gray-300 mb-3 text-xl  lg:text-3xl">
            Tool used
          </h1>

          <div className=" flex gap-3">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="  rounded uppercase bg-purple-700 lg:text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-purple-100 hover:text-purple-700   ">
                Project Link
              </button>
            </a>

            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <button className="  rounded uppercase bg-purple-700 lg:text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-purple-100 hover:text-purple-700   ">
                Github repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
