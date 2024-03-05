import React from "react";

const SongOfTheWind = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/SOTW.gif)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mb-14">
              SONG OF THE WIND
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
              src="https://www.youtube.com/embed/60xDPyeIXDo?si=29hsXr313LSjctvM"
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
              THIS WAS A 7 WEEK TEAM PROJECT DONE AT FUTUREGAMES. THIS IS A
              PUZZLE PLATFORMER. I WAS INCHARGE OF THE SYSTEM DESIGN AND
              TECHNICAL DESIGN. I PERFORMED THE JOB OF BEING A BRIDGE BETWEEN
              THE PROGRAMMERS AND THE DESIGNERS.
            </p>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <img src="/images/SOTW.gif" alt="SOTW" />
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              PROTOTYPING
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              Created multiple prototypes to materialize ideas for my Level
              Designers & help Programmers create the base logic:
            </p>
            <div className="text-left mx-2 md:mx-4 p-2">
              <ol className="list-decimal">
                <li>Universal Puzzle Unlocker</li>
                <li>AI Bot that followed the player.</li>
                <li>
                  Dialogue system that was connected to the AI Bot & its
                  movement.
                </li>
                <li>Spline-based Tutorial Bot.</li>
                <li>Waterfall system including the VFX.</li>
                <li>Teleporter system.</li>
                <li>New camera method for interactions.</li>
                <li>Base system to propel the player in the air.</li>
                <li>Zipline prototype.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="hero bg-base-100 py-8">
        <div className="hero-content flex-col lg:flex-row justify-between w-full lg:w-[60vw]">
          <div className="w-full lg:w-[50%] object-cover mb-4 lg:mb-0">
            <img src="/images/SOTW_PROTOTYPE.gif" alt="SOTW" />
          </div>
          <div className="w-full lg:w-[50%] lg:pl-4 text-center">
            <h1 className="text-3xl lg:text-5xl font-bold max-w-xl">
              TECHNICAL DESIGN
            </h1>
            <p className="py-2 text-wrap max-w-lg">
              I created and implemented the following things in the game:
            </p>
            <div className="text-left mx-2 md:mx-4 p-2">
              <ol className="list-decimal">
                <li>
                  A base for the Flight System :- <br /> Velocity based method
                  and tweaked the gravity to propel the player
                </li>
                <li>
                  Respawn system :- <br /> Super efficient method that just
                  teleports the player instead of respawning him.
                </li>
                <li>
                  Killzone system :- <br /> Disables the player mesh and
                  movement for a small delay and teleports the player back to
                  his checkpoint making it super efficient on the system.
                </li>
                <li>
                  Vertically opening door :- <br /> Timeline based vertical
                  opening door.
                </li>
                <li>
                  Horizontally opening door :- <br /> Timeline based horizontal
                  opening door.
                </li>
                <li>
                  Moving blocks system :- <br /> Timeline based system that
                  moves the player and the static mesh.
                </li>
                <li>
                  Base for efficient culling method for art assets <br />
                  Size based culling for the huge island masses in the game to
                  make the game perform better.
                </li>
                <li>
                  Platforming blocks that disappear on stepping :- <br />
                  State Machine Based system (Implemented by my programmers)
                  that disables the collision and static mesh.
                </li>
                <li>
                  Created and Implemented a Level Transition System :- <br />
                  Load Level Node System to Transition the levels.
                </li>
                <li>
                  Optimized the performance of the Final Product :- <br />
                  Collaborated with my Level Artist to balance the Shadows and
                  Assets Sizes.
                </li>
                <li>
                  End game triggers:- <br />A simple box trigger to transition
                  into the end game.
                </li>
                <li>
                  Loading Screen System :- <br />
                  Widget Loader & Unloader to create an illusion of a loading
                  screen.
                </li>
                <li>
                  Objective system for the door unlock mechanism
                  <br />
                  Used a combination of Interfaces & Bool Checks combined with
                  floats to set a requirement to unlock a door.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongOfTheWind;
