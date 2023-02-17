import React from 'react'

interface SkillProps {
	title: string
}

const Skill: React.FC<SkillProps> = ({ title }) => {
	return (
		<>
			{/* <span className="px-3 py-1 m-1 text-base font-bold rounded shadow-2xl bg-primary text-primary-content">
				{title}
			</span> */}
			<span className="p-4 m-1 font-bold rounded cursor-pointer badge badge-outline min-w-fit hover:badge-primary hover:badge-outline">
				{title}
			</span>
		</>
	)
}

export default Skill
