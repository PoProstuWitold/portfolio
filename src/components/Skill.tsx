import React from 'react'

interface SkillProps {
	title: string
}

const Skill: React.FC<SkillProps> = ({ title }) => {
	return (
		<>
			<span className="px-3 py-1 m-1 text-base font-bold rounded shadow-2xl bg-primary text-primary-content">
				{title}
			</span>
		</>
	)
}

export default Skill
