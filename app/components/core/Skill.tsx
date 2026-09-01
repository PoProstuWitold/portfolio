import { getSkillData } from '@/skills/data'

interface SkillProps {
	title: string
}

export const Skill: React.FC<SkillProps> = ({ title }) => {
	const { icon, url, linkDescription } = getSkillData(title)
	const label = linkDescription || title
	const content = (
		<>
			<span aria-hidden='true' className='text-xs'>
				{icon}
			</span>
			<span>{label}</span>
		</>
	)
	const className =
		'inline-flex items-center gap-1.5 rounded-full border border-base-content/15 px-2.5 py-1 text-sm font-semibold text-base-content/80 transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary'

	if (!url) {
		return <span className={className}>{content}</span>
	}

	return (
		<a
			href={url}
			target='_blank'
			rel='noopener noreferrer'
			aria-label={`${label} official website`}
			className={className}
		>
			{content}
		</a>
	)
}
