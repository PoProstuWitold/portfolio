import React from 'react'

const Main: React.FC = () => {
    return (
        <section id="main" className="min-h-screen bg-base-200">
            <div className="pt-20 hero">
            <div className="flex-col justify-between my-auto mt-40 hero-content lg:flex-row">
                <div>
                <h1 className="text-5xl font-bold text-primary">Hello, Im Witold Zawada</h1>
                <p className="py-6 mb-10">Beginner TypeScript developer</p>
                <a href="/#projects" className="btn btn-primary">Check projects</a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Main