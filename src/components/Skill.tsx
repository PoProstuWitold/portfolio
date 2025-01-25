interface SkillProps {
	title: string
}

const Skill: React.FC<SkillProps> = ({ title }) => {
	return (
		<>
			<span className="p-4 m-1 font-bold rounded cursor-pointer badge badge-outline min-w-fit hover:bg-primary hover:badge-outline transition-all duration-300">
				{title}
			</span>
		</>
	)
}

export default Skill
