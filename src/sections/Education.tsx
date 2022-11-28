/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Education: React.FC = () => {
    return (
        <section id="education" className="min-h-screen bg-base-200">
            <br />
            <br />
            <h1 className="text-4xl font-bold" >Education</h1>
            <ul className="flex mx-auto my-10 text-2xl">
                <li className="mx-auto">
                    <div className="flex flex-col lg:flex-row">
                        <span className="pr-5 italic font-bold">1st October 2022 - now</span> studying CS on 
                        <a target="blank" href="https://weii.pollub.pl/" className="px-2 underline">Faculty of Electrical Engineering and Computer Science</a> 
                        at the <a target="blank" href="https://pollub.pl/" className="pl-2 font-bold underline">Lublin University of Technology</a>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Education