import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row pt-20">
          <img
            className="rounded-2xl"
            src="/images/AboutMe.jpg"
            alt="aboutme"
            width={300}
          ></img>
          <div className="flex flex-col justify-around items-center mx-auto my-auto">
            <h3 className="text-3xl inline-block py-2 text-center text-cyan-600">
              HI, MY NAME IS SUSHANT,
              <br /> A TECHNICAL DESIGNER
            </h3>
            <h1 className="text-2xl inline-block py-2 text-center">
              EX-QUALITY ANALYST (UBISOFT INDIA STUDIOS)
            </h1>
            <h3 className="text-xl inline-block py-2 text-center">
              ORIGINALLY FROM INDIA. MOVED TO SWEDEN IN THE YEAR 2021 &
              COMPLETED MY GAME DESIGN COURSE.
              <br />
              <br />
              GOT PICKED UP BY FASTTRAVELGAMES AS A TECHNICAL ARTIST.
            </h3>
            <div>
              <Link href="/images/resume.png" target="_blank">
                <button className="btn glass btn-primary btn-wide mt-5 rounded-md">
                  Download Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
