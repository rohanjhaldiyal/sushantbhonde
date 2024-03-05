import React from "react";

const MoonRockCafe = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/MRC.gif)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mb-14">
              MOON ROCK CAFE
            </h1>
            <h3 className="text-xl font-semibold text-center">
              SYSTEM DESIGN, GENERALIST DESIGNER
              <p className="text-center m-0 p-12">UNITY</p>
            </h3>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <iframe
              className="w-full h-48 lg:h-64"
              src="https://www.youtube.com/embed/_oy-oRlED5M?si=9PqtOYu63Woywr6H"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              OVERVIEW
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              THIS WAS A 4 WEEK PROJECT DONE IN COLLABORATION WITH A TEAM OF
              ARTISTS & PROGRAMMERS FROM CHANGEMAKERS - FUTUREGAMES. THE GAME IS
              AN ENDLESS ALIEN RESTAURANT SIMULATOR WITH SINGLE CLICK
              INTERACTION MECHANICS.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <img src="/images/MRC_IMG_1.jpg" alt="1" />
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              GAMEPLAY LOOP
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Player starts with a tutorial level with an introduction to the
              game mechanics in a safe environment with no losing consequences.
              The difficulty ramps up in pace organically as each day progresses
              keeping the feel of the game consistent.
            </p>
            <div className="text-left mx-2 md:mx-4 p-2">
              <p className="py-2 text-wrap max-w-lg">THE LOOP :-</p>
              <ol className="list-decimal">
                <li>Show the customer his seat.</li>
                <li>Accept the order.</li>
                <li>Send the order to the kitchen.</li>
                <li>Collect the dish from the kitchen .</li>
                <li>Give the order to the customer.</li>
                <li>Repeat until the day ends.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <video
              className="rounded-xl w-full h-auto"
              autoPlay={true}
              loop={true}
              muted={true}
            >
              <source src="/images/MRC_VIDEO_1.webm" type="video/webm" />
            </video>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              TUTORIAL DESIGN
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Created a complete set of introduction to the game. All the
              actions are performed in a safe environment. The player does not
              lose any of his economy during the tutorial. You are introduced to
              the game mechanics and given a free upgrade along with a
              successful completion of the tutorial. The tutorial also
              introduces the backstory for the main character.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <img src="/images/MRC_IMG_2.jpg" alt="2" />
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              PROCEDURAL OBJECTIVE SYSTEM
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Every customer order is always unique. Each and every order is
              procedurally generated. Orders ramp up in difficulty & variety as
              the days progress providing the player with an organic growth in
              difficulty.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoonRockCafe;
