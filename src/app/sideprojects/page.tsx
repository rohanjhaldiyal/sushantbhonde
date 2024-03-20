"use client";
import React, { useEffect, useState } from "react";
import { FaComputer } from "react-icons/fa6";
import ProjectsCard from "@/components/Projects/ProjectsCard";

const SideProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchNotion = async () => {
      const response = await fetch("/api/notion/sideprojects", {
        next: { revalidate: 3600 },
      });
      const data = await response.json();
      setProjects(data);
    };
    fetchNotion();
  }, []);
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/sideprojects.gif)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mb-14">
              SIDE PROJECTS
            </h1>
            <h3 className="text-xl font-semibold text-center">
              SYSTEM DESIGN, TECHNICAL DESIGN
              <p className="text-center m-0 p-12">UNREAL ENGINE</p>
            </h3>
          </div>
        </div>
      </div>
      <div className="bg-base-100">
        <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mt-8">
          <FaComputer className="inline-block pb-2 mx-2 text-4xl" />
          Side Projects :-
        </h1>
      </div>
      {projects.map(
        (
          project: {
            coverImageUrl: string;
            description: string;
            link: string;
            title: string;
          },
          index: number
        ) => (
          <ProjectsCard
            key={index}
            title={project.title}
            link={project.link}
            description={project.description}
            imageUrl={project.coverImageUrl}
            isEven={index % 2 === 0}
          />
        )
      )}
    </>
  );
};

export default SideProjects;
