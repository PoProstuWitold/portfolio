import { getSkillData } from '@/utils/skillData'

interface SkillProps {
	title: string
}

const Skill: React.FC<SkillProps> = ({ title }) => {
	const { icon, url } = getSkillData(title)

	return (
		<a
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			className='p-4 m-1 font-bold rounded cursor-pointer badge badge-outline min-w-fit hover:bg-primary transition-all duration-300 flex items-center gap-2'
		>
			{icon}
			{title}
		</a>
	)
}

export default Skill
