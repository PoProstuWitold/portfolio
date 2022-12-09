import React from 'react'

interface SkillProps {
	title: string
}

const Skill: React.FC<SkillProps> = ({ title }) => {
	return (
		<>
			<span className="p-3 m-2 text-base font-bold rounded shadow-2xl bg-primary text-primary-content">
				{title}
			</span>
		</>
	)
}

export default Skill
