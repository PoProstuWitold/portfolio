/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Project from '../components/Project'
import { projects } from '../utils/constans'

const Projects: React.FC = () => {
    return (
        <section id="projects" className="min-h-screen bg-base-200">
            <br />
            <br />
            <h1 className="text-4xl font-bold" >Projects</h1>
            <div className="flex flex-col justify-start flex-grow mx-10 mt-10 lg:mt-0 lg:mx-20">
                {projects.map((project, index) => {
                    return <Project
                        key={index}
                        name={project.name}
                        description={project.description}
                        repo={project.repo}
                        skills={project.skills}
                    />
                })

                }
            </div>
        </section>
    )
}

export default Projects