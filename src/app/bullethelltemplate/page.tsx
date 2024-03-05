import React from "react";

const BulletHellTemplate = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/BHT.gif)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mb-14">
              BULLET HELL TEMPLATE
            </h1>
            <h3 className="text-xl font-semibold text-center">
              SYSTEM / TECHNICAL DESIGN
              <p className="text-center m-0 p-12">UNREAL ENGINE 4</p>
            </h3>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <iframe
              className="w-full h-48 lg:h-64"
              src="https://www.youtube.com/embed/hOqL1uWWHxA?si=uUcUS5QovjpKH3SU"
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
              THIS WAS A 1 WEEK SOLO PROJECT DONE FOR A VISUAL SCRIPTING
              ASSIGNMENT FOR FUTUREGAMES GAME DESIGN COURSE THE GAME IS AN
              ENDLESS (CUSTOMIZABLE) BULLET HELL HORDE MODE TOP DOWN SHOOTER
              GAME.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <iframe
              className="w-full h-48 lg:h-64"
              src="https://blueprintue.com/render/o0amv7r9/"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              GAMEPLAY LOOP
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Player spawns in a topdown enviroment and is chased by melee
              enemies in a round based game type. Player proceeds to the next
              round after killing all the enemies. Customizable total rounds
              lets you have an endless game mode.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <iframe
              className="w-full h-48 lg:h-64"
              src="https://blueprintue.com/render/-w9y--bs/"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              SPAWNER DESIGN
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Enemies are spawned from predefined locations at the start of the
              round. I use an array to select the locations. Every round the
              amount of enemy spawn increases using a random integer algorithm.
              This uses a simple increment Integer. This creates an organic
              growth of difficulty in the game.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <iframe
              className="w-full h-48 lg:h-64"
              src="https://blueprintue.com/render/9dzak7uo/"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              CHARACTER CONTROLLER
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              At the start of the game, I do a small raytrace to check the
              position of the mouse cursor. This position is also used to fire
              bullets.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <iframe
              className="w-full h-48 lg:h-64"
              src="https://blueprintue.com/render/7lf--hlt/"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              WEAPON SYSTEM
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Simple gates & Event Dispatchers are used to create an auto firing
              system. The bullets have a code on them that detect an object with
              a specific tag. On successful condition, it deals damage to the
              enemies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletHellTemplate;
