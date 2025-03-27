import React from "react";
import Head from "next/head";
import { projects } from "../utils/projects"; 

const Projects = () => {
    return (
        <section id="projects" className="my-10">
            <Head>
                <title>Projects</title>
            </Head>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {projects.map((project) => (
                    <a href={project.link} key={project.id} target="_blank" rel="noreferrer">
                        <div className="rounded-lg flex flex-col p-4 transform transition-transform duration-300 hover:-translate-y-1">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="mb-2 w-full h-48 object-cover rounded-lg"
                            />
                            <h3 className="text-xl">{project.title}</h3>
                            <p className="text-gray-600">
                                {project.description}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;