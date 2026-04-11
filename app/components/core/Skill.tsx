import { getSkillData } from '@/utils/skillData'

interface SkillProps {
	title: string
}

export const Skill: React.FC<SkillProps> = ({ title }) => {
	const { icon, url, linkDescription } = getSkillData(title)

	return (
		<a
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			title={linkDescription}
			className='inline-flex items-center gap-1.5 rounded-full border border-base-content/15 px-2.5 py-1 text-sm font-semibold text-base-content/80 transition-all duration-200 hover:border-primary/40 hover:text-primary hover:bg-primary/10'
		>
			<span className='text-xs'>{icon}</span>
			{title}
		</a>
	)
}
