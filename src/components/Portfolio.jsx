import React, { useState } from "react";

function PortFolio() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const cardItem = [
    {
      id: 1,
      video: "/Amazon Clone.mp4",
      thumbnail: "/AC.jpeg",
      name: "HTML+CSS",
      description: "This is my very first attempt to make an Amazon clone.",
    },
    {
      id: 2,
      video: "/Rock-Paper-Scissor.mp4",
      thumbnail: "/RPS.jpeg",
      name: "HTML+CSS+JS",
      description: "I made this game using HTML, CSS, and JavaScript.",
    },
    {
      id: 3,
      video: "/Python Project.mp4",
      thumbnail: "/TED.jpeg",
      name: "Python based AI project",
      description: "Python-based AI project which detects emotion by text.",
    },
    {
      id: 4,
      video: "/Figma Project (Prototyping).mp4",
      thumbnail: "/LMS.jpeg",
      name: "FIGMA based project",
      description: "Figma project in which LMS is designed for STUDENT & TEACHER portal with login.",
    },
  ];

  const handlePlayVideo = (id) => {
    setPlayingVideo(id);
  };

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, video, thumbnail, name, description }) => (
            <div
              className="relative w-full h-0 pb-[56.25%] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 overflow-hidden"
              key={id}
            >
              {playingVideo === id ? (
                <video
                  src={video}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  autoPlay
                />
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                  <img
                    src={thumbnail}
                    alt={`${name} thumbnail`}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                  <button
                    className="absolute bg-black bg-opacity-50 text-white font-bold py-2 px-4 rounded"
                    style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    onClick={() => handlePlayVideo(id)}
                  >
                    Play Video
                  </button>
                </div>
              )}
       <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-75 p-1">
  <div className="font-bold text-base mb-1">{name}</div>
  <p className="text-gray-700 text-xs">{description}</p>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
