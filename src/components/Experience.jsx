import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import Python from "../../public/python.webp";

import Reactjs from "../../public/reactjs.png";
import VueLogo from "../../public/vue.png";
import NuxtLogo from "../../public/nux.png";
import Nodejs from "../../public/node.png";
import Tailwind from "../../public/tailwind.png";
import Bootstrap from "../../public/bootstrap.jpeg";
import Figma from "../../public/figma.png";
import AdobeXD from "../../public/xd.png";
import canva from "../../public/canva.png";
import Github from "../../public/github.jpeg";
import Bitbucket from "../../public/bitbucket.jpeg";
import Vscode from "../../public/vscode.jpeg";

function Experience() {
  const categories = [
    {
      title: "Languages",
      items: [
        { id: 1, logo: html, name: "HTML" },
        { id: 2, logo: css, name: "CSS" },
        { id: 3, logo: javascript, name: "JavaScript" },
        { id: 4, logo: java, name: "Java" },
        { id: 5, logo: Python, name: "Python" },
        // { id: 6, logo: C, name: "C" },
        // { id: 7, logo: Cpp, name: "C++" },
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { id: 8, logo: Reactjs, name: "React.js" },
        { id: 9, logo: VueLogo, name: "Vue.js" },
        { id: 10, logo: NuxtLogo, name: "Nuxt 3" },
        { id: 11, logo: Nodejs, name: "Node.js" },
        { id: 12, logo: Tailwind, name: "Tailwind CSS" },
        { id: 13, logo: Bootstrap, name: "Bootstrap" },
      ],
    },
    {
      title: "Design Tools",
      items: [
        { id: 14, logo: Figma, name: "Figma" },
        { id: 15, logo: AdobeXD, name: "Adobe XD" },
        { id: 16, logo: canva, name: "Canva" },
      ],
    },
    {
      title: "Dev Tools",
      items: [
        { id: 18, logo: Github, name: "GitHub" },
        { id: 19, logo: Bitbucket, name: "Bitbucket" },
        { id: 20, logo: Vscode, name: "VS Code" },
      ],
    },
  ];


  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="text-gray-700 mb-10">
          I have over 2 years of experience working with the following tools and technologies:
        </p>

        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">{category.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {category.items.map(({ id, logo, name }) => (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center border-2 rounded-full md:w-[160px] md:h-[160px] shadow-md p-2 cursor-pointer hover:scale-105 duration-300"
                >
                  <img src={logo} alt={name} className="w-[80px] h-[80px] object-contain rounded-full" />
                  <div className="mt-2 font-medium text-center">{name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Experience;
