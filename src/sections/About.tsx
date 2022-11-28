/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Skill from '../components/Skill'
import { mySkills } from '../utils/constans'

const {
    tools,
    libsAndFrameworks,
    languages,
    learning
} = mySkills

const About: React.FC = () => {
    return (
        <section id="about" className="min-h-screen">
            <br />
            <br />
            <h1 className="text-4xl font-bold" >About me</h1>
            <br />
            <div className="flex flex-col justify-start lg:mx-20 lg:flex-row">
                <div className="flex-grow lg:max-w-[50%]">
                    <h2 className="mx-10 text-3xl font-bold text-left">Short story</h2>
                    <br />
                        <p className="mx-10 text-2xl text-justify">
                        I'm Witold Zawada. Self-taught web developer. I started my coding journey in 2020 with C++ in high school. 
                        Then I realised I wanna dive deeper into programming and make amazing things. 
                        After short time trying different languages and different fields of coding I fell in love with web dev, especially Node.js and TypeScript and that why I'm here today.
                        </p>
                        <p className="mx-10 my-5 text-2xl text-justify">
                        Besides programming, I also like video games, anime, skiing, history, dogs and other animals.
                        </p>
                        <br />
                    <div className="flex mx-10">
                    <a href="/#contact" className="btn btn-lg btn-outline w-60">Contact</a>
                    </div>
                </div>
                <div className="flex-grow mt-10 lg:mt-0 lg:max-w-[50%] mx-10">
                    <h2 className="text-3xl font-bold text-left">Skills</h2>
                    <br />
                    <h2 className="text-2xl font-bold text-left">Languages</h2>
                    <div className="flex flex-wrap">
                        {languages.map((skill, index) => {
                            return <Skill key={index} title={skill}/>
                        })}
                    </div>
                    <br />
                    <h2 className="text-2xl font-bold text-left">Frameworks & Libraries</h2>
                    <div className="flex flex-wrap">
                        {libsAndFrameworks.map((skill, index) => {
                            return <Skill key={index} title={skill}/>
                        })}
                    </div>
                    <br />
                    <h2 className="text-2xl font-bold text-left">Tools & Databases</h2>
                    <div className="flex flex-wrap">
                        {tools.map((skill, index) => {
                            return <Skill key={index} title={skill}/>
                        })}
                    </div>
                    <br />
                    <h2 className="text-2xl font-bold text-left">Currently learning</h2>
                    <div className="flex flex-wrap">
                        {learning.map((skill, index) => {
                            return <Skill key={index} title={skill}/>
                        })}
                    </div>
                    <br />
                </div>
            </div>
        </section>
    )
}

export default About