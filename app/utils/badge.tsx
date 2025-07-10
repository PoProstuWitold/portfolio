import type { JSX } from 'react'
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

type BadgeInfo = {
	label: string
	className: string
	icon: JSX.Element
}

export const badgeDataMap: Record<string, BadgeInfo> = {
	featured: {
		label: 'Featured',
		className: 'badge-warning',
		icon: <FaStar />
	},
	new: { label: 'New', className: 'badge-success', icon: <FaRocket /> },
	inProgress: {
		label: 'In Progress',
		className: 'badge-info',
		icon: <FaHourglassHalf />
	},
	deprecated: {
		label: 'Deprecated',
		className: 'badge-error',
		icon: <FaTrash />
	},
	collaboration: {
		label: 'Team Project',
		className: 'badge-neutral',
		icon: <FaUsers />
	},
	personal: {
		label: 'Personal',
		className: 'badge-info',
		icon: <FaUserAlt />
	},
	docs: {
		label: 'Docs',
		className: 'badge-neutral',
		icon: <FaBook />
	},
	selfhosted: {
		label: 'Selfhosted',
		className: 'badge-secondary',
		icon: <FaServer />
	},
	education: {
		label: 'Education',
		className: 'badge-accent',
		icon: <BsMortarboardFill />
	}
}
