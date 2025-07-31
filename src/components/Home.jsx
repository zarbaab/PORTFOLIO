import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import pic from "../../public/zar.png";
import { CiMail } from "react-icons/ci";
import { FaHtml5 } from "react-icons/fa";

import { FaCss3 } from "react-icons/fa";




function Home() {
  return (
    <>
     <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Frontend Developer","Graphic designer","App developer","UI/UX designer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
           I’m a frontend developer and packaging designer with a passion for building intuitive, visually compelling user experiences. With a strong foundation in HTML, CSS, JavaScript, React.js, Tailwind CSS, and Bootstrap, I bring designs to life with clean, responsive code. My skill set also includes backend exposure using Node.js and Python, along with programming experience in C, C++, and Java.

Beyond code, I’m well-versed in UI/UX design tools like Figma, Adobe XD, Photoshop, and Canva — allowing me to bridge the gap between functionality and aesthetics. From collaborating with London-based teams at Webtech.dev to developing AI-powered food assistance systems in academia, I thrive in dynamic environments where design meets innovation.

I'm always eager to learn, share, and connect with like-minded professionals. Let’s collaborate and create experiences that leave a lasting impact.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100074346025045&mibextid=ZbWKwL" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/zarbaab-mehboob-23bb42233/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                  <a href="mailto:zarbaabmehboob@gmail.com" target="_blank">

                      <CiMail className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                 
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <FaHtml5  className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  < FaCss3 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <a href="/Zarbaab's_Resume.pdf" download className="bg-red-700 text-white px-4 py-1.5 rounded">
                DOWNLOAD MY CV
              </a>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home