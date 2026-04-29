type BlogTagsProps = {
	tags?: string[]
	selectedTags?: string[]
	onTagClick?: (tag: string) => void
	showAll?: boolean
	allLabel?: string
	size?: 'sm' | 'md'
	className?: string
}

function cn(...classes: Array<string | false | null | undefined>) {
	return classes.filter(Boolean).join(' ')
}

export function BlogTags({
	tags = [],
	selectedTags = [],
	onTagClick,
	showAll = false,
	allLabel = 'All',
	size = 'sm',
	className
}: BlogTagsProps) {
	if (tags.length === 0 && !showAll) {
		return null
	}

	const isFilterMode = showAll && Boolean(onTagClick)

	const sizeClasses = {
		sm: 'px-2.5 py-1 text-xs',
		md: 'px-3.5 py-1.5 text-sm'
	}

	const staticTagClassName =
		'border-secondary bg-secondary text-secondary-content'

	const neutralTagClassName =
		'border-base-300 bg-base-200 text-base-content/80'

	const getIsSelected = (tag: string) => {
		if (tag === '') {
			return selectedTags.length === 0
		}

		return selectedTags.includes(tag)
	}

	const getTagClassName = (isSelected: boolean) => {
		const colorClassName = isFilterMode
			? isSelected
				? staticTagClassName
				: neutralTagClassName
			: staticTagClassName

		return cn(
			'inline-flex items-center justify-center rounded-md border font-semibold leading-none',
			'transition-colors duration-150',
			sizeClasses[size],
			colorClassName,
			isFilterMode &&
				!isSelected &&
				'cursor-pointer hover:border-secondary hover:bg-secondary hover:text-secondary-content',
			isFilterMode &&
				isSelected &&
				'cursor-pointer hover:bg-secondary/90',
			isFilterMode &&
				'focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-base-100'
		)
	}

	const renderTag = (tag: string, label = tag) => {
		const isSelected = getIsSelected(tag)
		const tagClassName = getTagClassName(isSelected)

		if (isFilterMode) {
			return (
				<button
					key={tag === '' ? 'all' : tag}
					className={tagClassName}
					onClick={() => onTagClick?.(tag)}
					type='button'
					aria-pressed={isSelected}
				>
					{label}
				</button>
			)
		}

		return (
			<span key={tag} className={tagClassName}>
				{label}
			</span>
		)
	}

	return (
		<div className={cn('flex flex-wrap items-center gap-2', className)}>
			{showAll && renderTag('', allLabel)}
			{tags.map((tag) => renderTag(tag))}
		</div>
	)
}
