import React from 'react'



const Skill: React.FC<{ title }> = ({ title }) => {
    return (
        <>
            {/* <img src={source} alt={alt} title={title}/> */}
            <button className="p-3 m-2 text-base font-bold rounded bg-primary">
                {title}
            </button>
        </>
    )
}

export default Skill