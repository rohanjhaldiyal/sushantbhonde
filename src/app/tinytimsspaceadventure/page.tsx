import React from "react";

const TinyTimsSpaceAdventure = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/TTSA.gif)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mb-14">
              TINY TIM&apos;S SPACE ADVENTURE
            </h1>
            <h3 className="text-xl font-semibold text-center">
              LEVEL DESIGN, GENERALIST DESIGNER
              <p className="text-center m-0 p-12">UNREAL ENGINE</p>
            </h3>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <iframe
              className="w-full h-48 lg:h-64"
              src="https://www.youtube.com/embed/QI71jdLt1k4?si=i_nlUtaR0RX27FjV"
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
              This was a 1.5 week project made at Futuregames with Emil L. &
              Halldor K. The project was created under the guidance of Martin
              Sahlin using Unraveled as an inspiration.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <video
              className="rounded-xl w-full h-auto"
              autoPlay={true}
              loop={true}
              muted={true}
            >
              <source src="/images/TTSA_VIDEO_1.webm" type="video/webm" />
            </video>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              GAMEPLAY LOOP
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Player starts with a tutorial level with an introduction to the
              game mechanics in a safe environment with no losing consequences.
              The difficulty ramps up in pace organically as the player proceeds
              in the level. The second level consists of a simple to complete
              platforming level (as per assignment requirements).
            </p>
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
              <source src="/images/TTSA_VIDEO_2.webm" type="video/webm" />
            </video>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              BOULDER SPAWNER
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Created a Level Design element to add a platforming objective.
              Boulders spawn at the spawn point and use a custom navmesh to
              reach the despawn point which uses a simple box trigger to despawn
              the boulders. The boulders also use a boxtrigger to deal damage to
              the player.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <video
              className="rounded-xl w-full h-auto"
              autoPlay={true}
              loop={true}
              muted={true}
            >
              <source src="/images/TTSA_VIDEO_1.webm" type="video/webm" />
            </video>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              GENERALIST DESIGN{" "}
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Created a basic player health system. The same health system is
              reused to create a death system. Also created a health pickup
              system using the above player health system.
            </p>
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
              <source src="/images/TTSA_VIDEO_4.webm" type="video/webm" />
            </video>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              LEVEL TRANSITIONS & MENU SYSTEMS
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Created a simple level transition system to manually load / stream
              levels created using the sublevel systems. Created completely
              modular menus that are completely scalable.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TinyTimsSpaceAdventure;
