import React from "react";
import desktop from "../assets/dopefolio-removebg-preview.png";

const Project = () => {
  const skills = [
    "React",
    "Tailwind CSS",
    "Redux",
    "Node JS",
    "Express JS",
    "MongoDB",
    "GIT",
    "Responsive Design",
  ];
  return (
    <section>
      <div className=" w-[90%] lg:w-[50%] flex flex-col gap-10 mx-auto mb-10">
        <img className=" " src={desktop} alt="" />
        <div>
          <h1 className=" font-bold text-gray-300 mb-3  text-xl lg:text-3xl">
            Project Overview
          </h1>
          <p className=" text-gray-400 lg:text-lg">
            Dopefolio is an Open-Source project which is a simple and clean
            multi-page portfolio website template for developers. I created this
            project for developers to quickly build a good-looking and
            fast-performing multi-page portfolio without having to code their
            portfolio from scratch. <br />
            Since the launch of this project, It has received more than 2k stars
            on Github and it has also got featured on hundreds of sites and
            CSS-tricks.com has also featured this template as the hottest
            frontend tool of 2021 in one of their articles which you can find
            here Dopefolio is now being used by thousands of developers globally
            and it has helped many people in landing jobs & opportunities which
            makes me happy that my creation is helping other people in building
            their careers. <br /> It has many other features like Dopefolio's
            repo contains a playground link which people can use to test the
            template with different theme colours to find their own preferred
            primary colour for the template. Feel free to check out the Project
            by visiting the Project Link.
          </p>
        </div>

        <div>
          <h1 className=" font-bold text-gray-300 mb-3 text-xl  lg:text-3xl">
            Tool used
          </h1>
          <div className=" flex gap-4 flex-wrap">
            {skills.map((skill, index) => {
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
            <button className="  rounded uppercase bg-purple-700 lg:text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-purple-100 hover:text-purple-700   ">
              Project Link
            </button>

            <button className="  rounded uppercase bg-purple-700 lg:text-lg font-semibold text-white px-8 py-2 lg:py-4  hover:bg-purple-100 hover:text-purple-700   ">
              Github repo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
