import React from "react";
import { FaUserPen } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/background_video.gif)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mb-14">
              <FaUserPen className="inline-block pb-3 mx-2 text-4xl" />
              About Me :-
            </h1>
            <h3 className="text-lg font-semibold text-center lg:text-left">
              <span className="text-lg">
                I am a system / technical designer at heart with a background in
                Quality Assurance. Natural eye for design and the potential bugs
                that might arise out of certain design choices. Working on some
                of the best AAA games @Ubisoft Entertainment Limited helped me
                optimize my development process by weeding out potential QA
                bottlenecks.
              </span>
              <br />
              <br />
              <span className="text-lg">
                <span className=" underline">Starlink: Battle for Atlas</span>{" "}
                helped me discover my love for character movement and simplicity
                in design. Working on a Nintendo Switch in the extremely early
                days with no tooling support was a challenge i quite enjoyed
                taking on. Creating my own tools sparked a love to try my hand
                at making my own games.
              </span>
              <br />
              <br />
              <span className="text-lg">
                <span className=" underline">IMMORTAL FENYX RISING</span> was
                the game that helped me realise my true potential and the true
                extent of the industry. I contributed in the game design process
                as an embedded QA helping actively in the growth of the game.
              </span>
              <br />
              <br />
              <span className="text-lg">
                <span className=" underline">Tom Clancy&apos;s XDefiant</span> helped
                me understand the intricacy behind every system in the game. The
                interconnections between each systems & the dependancies created
                by them.
              </span>
              <br />
              <br />
              <span className="text-lg">
                I play a lot of DoTA2 with over 10,000 hours accumulated
                overtime. DoTA 2 created a deeplust for system design within me
                which helps me to create fun to play gameplay functionalities &
                elements. Rapid prototyping during freetimes is my hobby.
              </span>
              <br />
              <br />
              <span className="text-lg">
                Harry Potter &amp; Aragon are my favourite fiction series. I enjoy
                playing a lot of single player games, MoBAs &amp; FPS&apos;s. I love to
                talk about games and watch streams.
              </span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

{
  /* <>
      <div className="bg-base-200">
        <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mt-8 lg:text-left lg:px-[136px]">
          <FaUserPen className="inline-block pb-2 mx-2 text-4xl" />
          About Me :-
        </h1>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <video
            className="rounded-xl lg:w-2/5"
            autoPlay={true}
            loop={true}
            muted={true}
            width={650}
          >
            <source src="/images/background_video.webm" type="video/webm" />
          </video>
          <h3 className="lg:w-2/3 p-4 lg:p-2 lg:pr-16 text-lg text-center lg:text-left">
            <span className="text-lg">
              I am a system / technical designer at heart with a background in
              Quality Assurance. Natural eye for design and the potential bugs
              that might arise out of certain design choices. Working on some of
              the best AAA games @Ubisoft Entertainment Limited helped me
              optimize my development process by weeding out potential QA
              bottlenecks.
            </span>
            <br />
            <br />
            <span className="text-lg">
              <span className=" underline">Starlink: Battle for Atlas</span>{" "}
              helped me discover my love for character movement and simplicity
              in design. Working on a Nintendo Switch in the extremely early
              days with no tooling support was a challenge i quite enjoyed
              taking on. Creating my own tools sparked a love to try my hand at
              making my own games.
            </span>
            <br />
            <br />
            <span className="text-lg">
              <span className=" underline">IMMORTAL FENYX RISING</span> was the
              game that helped me realise my true potential and the true extent
              of the industry. I contributed in the game design process as an
              embedded QA helping actively in the growth of the game.
            </span>
            <br />
            <br />
            <span className="text-lg">
              <span className=" underline">Tom Clancy's XDefiant</span> helped
              me understand the intricacy behind every system in the game. The
              interconnections between each systems & the dependancies created
              by them.
            </span>
            <br />
            <br />
            <span className="text-lg">
              I play a lot of DoTA2 with over 10,000 hours accumulated overtime.
              DoTA 2 created a deeplust for system design within me which helps
              me to create fun to play gameplay functionalities & elements.
              Rapid prototyping during freetimes is my hobby.
            </span>
            <br />
            <br />
            <span className="text-lg">
              Harry Potter & Aragon are my favourite fiction series. I enjoy
              playing a lot of single player games, MoBAs & FPS's. I love to
              talk about games and watch streams.
            </span>
          </h3>
        </div>
      </div>
    </> */
}
