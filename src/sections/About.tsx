/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Skill from '../components/Skill'

const About: React.FC = () => {
    return (
        <section id="about" className="min-h-screen">
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-4xl font-bold" >About me</h1>
            <p className="text-2xl" >Who I am and what Im using</p>
            <br />
            <div className="flex flex-col justify-start lg:mx-20 lg:flex-row">
                <div className="flex-grow lg:max-w-[50%]">
                    <h2 className="mx-10 text-3xl font-bold text-left">Short bio</h2>
                    <br />
                        <p className="mx-10 text-2xl text-justify">
                        Hi, my name is Witold I'm 19yo and I'm from Poland. I like coding in NodeJS and TypeScript. 
                        I also like video games, anime, skiing, history, dogs and other animals.
                        </p>
                        <br />
                    <div className="flex mx-10">
                    <a href="/#contact" className="btn btn-lg">Contact</a>
                    </div>
                </div>
                <div className="flex-grow mt-10 lg:mt-0 lg:max-w-[50%] mx-10">
                    <h2 className="text-3xl font-bold text-left">Skills</h2>
                    <br />
                    <h2 className="text-2xl font-bold text-left">Languages</h2>
                    <div className="flex flex-wrap">
                        <Skill title="Node.js"/>
                        <Skill title="JavaScript"/>
                        <Skill title="TypeScript"/>
                        <Skill title="HTML5"/>
                        <Skill title="CSS3"/>
                    </div>
                    <br />
                    <h2 className="text-2xl font-bold text-left">Tools</h2>
                    <div className="flex flex-wrap">
                        <Skill title="React"/>
                        <Skill title="Next.js"/>
                        <Skill title="TailwindCSS"/>
                        <Skill title="Nest.js"/>
                        <Skill title="PostgreSQL"/>
                        <Skill title="MongoDB"/>
                        <Skill title="Redis"/>
                        <Skill title="Insomnia"/>
                        <Skill title="Jest"/>
                        <Skill title="Docker"/>
                    </div>
                    <br />
                    <h2 className="text-2xl font-bold text-left">Currently learning</h2>
                    <div className="flex flex-wrap">
                        <Skill title="C/C++"/>
                        <Skill title="Rust"/>
                        <Skill title="Python"/>
                    </div>
                    <br />
                </div>
            </div>
        </section>
    )
}

export default About