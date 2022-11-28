/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Skill from './Skill'

interface ProjectProps {
    name: string
    description: string
    repo: string
    skills: Array<string>
}

const Project: React.FC<ProjectProps> = ({ name, description, repo, skills }) => {
    return (
        <>
            <div className="flex flex-col my-10 lg:flex-row">
                <div className="flex flex-col flex-grow lg:max-w-[50%]">
                    <h2 className="mx-auto my-4 text-3xl font-bold">
                        <a className="underline" target="blank" href={repo}>{name}</a>
                    </h2>
                    <img src="https://images8.alphacoders.com/380/380534.png" alt="image" className="h-48 mx-auto rounded-xl w-96" />
                </div>
                <div className="flex-grow lg:max-w-[50%]">
                    
                    <br />
                        <p className="mx-3 text-2xl text-justify">
                        {description}
                        </p>
                        <div className="flex flex-wrap mx-1">
                            {skills.map((skill, index) => {
                                return <Skill key={index} title={skill}/>
                            })}
                        </div>
                    <div className="flex mx-10">
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project