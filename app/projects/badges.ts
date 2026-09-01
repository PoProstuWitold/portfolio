import type { IconType } from 'react-icons'
import { BsMortarboardFill } from 'react-icons/bs'
import {
	FaBook,
	FaHourglassHalf,
	FaRocket,
	FaServer,
	FaStar,
	FaTrash,
	FaUserAlt,
	FaUsers
} from 'react-icons/fa'

type BadgeDefinition = {
	label: string
	className: string
	icon: IconType
}

export const badgeDefinitions = {
	featured: {
		label: 'Featured',
		className: 'badge-warning',
		icon: FaStar
	},
	new: {
		label: 'New',
		className: 'badge-success',
		icon: FaRocket
	},
	inProgress: {
		label: 'In Progress',
		className: 'badge-info',
		icon: FaHourglassHalf
	},
	deprecated: {
		label: 'Deprecated',
		className: 'badge-error',
		icon: FaTrash
	},
	collaboration: {
		label: 'Team Project',
		className: 'badge-neutral',
		icon: FaUsers
	},
	personal: {
		label: 'Personal',
		className: 'badge-info',
		icon: FaUserAlt
	},
	docs: {
		label: 'Docs',
		className: 'badge-neutral',
		icon: FaBook
	},
	selfhosted: {
		label: 'Selfhosted',
		className: 'badge-secondary',
		icon: FaServer
	},
	education: {
		label: 'Education',
		className: 'badge-accent',
		icon: BsMortarboardFill
	}
} as const satisfies Record<string, BadgeDefinition>

export type BadgeId = keyof typeof badgeDefinitions

export const badgeIds = Object.keys(badgeDefinitions) as BadgeId[]

export function isBadgeId(value: string): value is BadgeId {
	return Object.hasOwn(badgeDefinitions, value)
}
