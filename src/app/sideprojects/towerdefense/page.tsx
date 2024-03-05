import React from "react";

const BulletHellTemplate = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/TD.gif)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mb-14">
              TOWER DEFENSE TEMPLATE
            </h1>
            <h3 className="text-xl font-semibold text-center">
              SYSTEM / TECHNICAL DESIGN
              <p className="text-center m-0 p-12">UNREAL ENGINE</p>
            </h3>
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
              <source src="/images/TD_VIDEO_1.webm" type="video/webm" />
            </video>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              OVERVIEW
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              THIS WAS A 1 WEEK PROJECT DONE FOR THE VISUAL SCRIPTING COURSE AT
              FUTUREGAMES. THIS IS AN ENDLESS TOWER DEFENSE TEMPLATE WITH
              MODULAR ENEMY TYPES, ROUNDS, TOWER TYPES ETC.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <img src="/images/TD.gif" alt="1" />
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              GAMEPLAY LOOP
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Game starts with the spawning of the enemies running along a
              predefined path. Goal of the game is to destroy the enemies before
              they reach the end point.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <iframe
              className="w-full h-48 lg:h-64"
              src="https://blueprintue.com/render/6we3khg3/"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              CUSTOM TOP DOWN CAMERA
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Created a custom top down camera controller specially for the
              tower defense game mode. It uses a pawn class attached with a
              camera with collision checks and a basic movements using WASD.
              Also includes a zoom in zoom out functionality.
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
              <source src="/images/TD_VIDEO_1.webm" type="video/webm" />
            </video>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              TOWER LOGIC
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              A complete modular set of towers with replaceable models. The
              towers use raycasting to search in an AOE for enemies passing
              through. The tower then detects the closest enemy and fires at it.
              (Closest enemy is always preferred over any other enemy, this is
              also customizable) Each tower has a variable to set its fire rate
              & cooldown period. A variable also lets you set the damage that
              can be dealt.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <iframe
              className="w-full h-48 lg:h-64"
              src="https://blueprintue.com/render/yomukoiv/"
              scrolling="no"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              ENEMY AI LOGIC
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Enemy AI has majority of the code for taking damage on contact
              with the ray trace projectile. Each enemy has a custom health
              variable that can be set. Each enemy adds gold to the player
              economy on death. A simple trigger box acts as the enemy
              despawner. A custom navmesh helps the enemy detect the target
              point of the despawner creating a pathway for them.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulletHellTemplate;
