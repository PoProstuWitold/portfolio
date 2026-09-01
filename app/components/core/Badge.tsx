import { type BadgeId, badgeDefinitions } from '@/projects/badges'

interface BadgeProps {
	id: BadgeId
}

export function Badge({ id }: BadgeProps) {
	const { className, icon: Icon, label } = badgeDefinitions[id]

	return (
		<span
			className={`badge flex items-center gap-1 rounded-lg px-2 py-1 text-sm ${className}`}
		>
			<Icon aria-hidden='true' />
			{label}
		</span>
	)
}
