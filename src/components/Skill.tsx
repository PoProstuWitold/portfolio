import React from 'react'



const Skill: React.FC<{ title }> = ({ title }) => {
    return (
        <>
            <span className="p-3 m-2 text-base font-bold rounded shadow-2xl bg-primary">
                {title}
            </span>
        </>
    )
}

export default Skill