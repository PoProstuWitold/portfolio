import type React from 'react'
import { badgeDataMap } from '@/utils/badge'

interface BadgeProps {
	type: string
}

export const Badge: React.FC<BadgeProps> = ({ type }) => {
	const badge = badgeDataMap[type]
	if (!badge) return null

	return (
		<div
			className={`badge flex items-center gap-1 rounded-lg px-2 py-1 text-sm ${badge.className}`}
		>
			{badge.icon}
			{badge.label}
		</div>
	)
}
