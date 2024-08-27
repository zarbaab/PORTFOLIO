import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import Figma from "../../public/figma.png";
import Reactjs from "../../public/reactjs.png";
import Python from "../../public/python.webp";
import AdobeXD from "../../public/xd.png";
import Tailwind from "../../public/tailwind.png";
import canva from "../../public/canva.png";
function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: Python,
      name: "Python",
    },
    {
      id: 6,
      logo: Figma,
      name: "Figma",
    },
    {
      id: 7,
      logo: AdobeXD,
      name: "AdobeXD",
    },
    {
      id: 8,
      logo: canva,
      name: "canva",
    },
    {
      id: 9,
      logo: Reactjs,
      name: "Reactjs",
    },
    {
      id: 10,
      logo: Tailwind,
      name: "Tailwind",
    },
   
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
          I've more than 2 years of experience in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
