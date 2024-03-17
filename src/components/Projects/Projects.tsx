"use client";
import React, { useEffect, useState } from "react";
import { FaComputer } from "react-icons/fa6";
import ProjectsCard from "./ProjectsCard";
import axios from "axios";

const Projects: any = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchNotion = async () => {
      const response = await axios.get("/api/notion/projects");
      const data = await response.data;
      setProjects(data);
    };
    fetchNotion();
  }, []);
  return (
    <>
      <div className="bg-base-100">
        <h1 className="text-3xl lg:text-4xl inline-block font-bold text-center w-full mt-8">
          <FaComputer className="inline-block pb-2 mx-2 text-4xl" />
          Project Showcase :-
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

export default Projects;
