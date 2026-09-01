'use client'

import { useLayoutEffect, useMemo, useRef, useState } from 'react'

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
	const containerRef = useRef<HTMLDivElement>(null)
	const allTagMeasureRef = useRef<HTMLSpanElement>(null)
	const overflowMeasureRef = useRef<HTMLSpanElement>(null)
	const tagMeasureRefs = useRef<Array<HTMLSpanElement | null>>([])

	const [visibleTagCount, setVisibleTagCount] = useState(0)
	const [measuredKey, setMeasuredKey] = useState<string | null>(null)

	const measurementKey = useMemo(
		() =>
			JSON.stringify({
				tags,
				showAll,
				allLabel,
				size
			}),
		[tags, showAll, allLabel, size]
	)

	const isFilterMode = showAll && Boolean(onTagClick)
	const isMeasured = size !== 'sm' || measuredKey === measurementKey

	const sizeClasses = {
		sm: 'px-2.5 py-1 text-xs',
		md: 'px-3.5 py-1.5 text-sm'
	}

	const baseTagClassName =
		'inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-md border font-semibold leading-none'

	const staticTagClassName =
		'border-secondary bg-secondary text-secondary-content'

	const neutralTagClassName =
		'border-base-300 bg-base-200 text-base-content/80'

	const overflowTagClassName =
		'border-base-300 bg-base-200 text-base-content/70'

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
			baseTagClassName,
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

	const renderTag = (tag: string, label = tag, key: string = tag) => {
		const isSelected = getIsSelected(tag)
		const tagClassName = getTagClassName(isSelected)

		if (isFilterMode) {
			return (
				<button
					key={key}
					type='button'
					className={tagClassName}
					aria-pressed={isSelected}
					onClick={() => onTagClick?.(tag)}
				>
					{label}
				</button>
			)
		}

		return (
			<span key={key} className={tagClassName}>
				{label}
			</span>
		)
	}

	useLayoutEffect(() => {
		if (size !== 'sm') {
			setVisibleTagCount(tags.length)
			setMeasuredKey(measurementKey)
			return
		}

		const container = containerRef.current
		const overflowMeasure = overflowMeasureRef.current

		if (!container || !overflowMeasure) {
			return
		}

		let isActive = true

		const finishMeasurement = (count: number) => {
			if (!isActive) {
				return
			}

			setVisibleTagCount(count)
			setMeasuredKey(measurementKey)
		}

		const calculateVisibleTags = () => {
			if (!isActive) {
				return
			}

			const containerWidth = container.clientWidth

			if (containerWidth === 0) {
				return
			}

			const containerStyles = window.getComputedStyle(container)
			const gap =
				Number.parseFloat(
					containerStyles.columnGap || containerStyles.gap
				) || 0

			const allTagWidth = showAll
				? (allTagMeasureRef.current?.getBoundingClientRect().width ?? 0)
				: 0

			const tagWidths = tags.map(
				(_, index) =>
					tagMeasureRefs.current[index]?.getBoundingClientRect()
						.width ?? 0
			)

			const getRequiredWidth = (
				tagCount: number,
				includeOverflowIndicator: boolean
			) => {
				const widths: number[] = []

				if (showAll) {
					widths.push(allTagWidth)
				}

				widths.push(...tagWidths.slice(0, tagCount))

				if (includeOverflowIndicator) {
					const hiddenTagCount = tags.length - tagCount

					overflowMeasure.textContent = `+${hiddenTagCount}`
					widths.push(overflowMeasure.getBoundingClientRect().width)
				}

				if (widths.length === 0) {
					return 0
				}

				const totalItemsWidth = widths.reduce(
					(total, width) => total + width,
					0
				)

				const totalGapWidth = gap * (widths.length - 1)

				return totalItemsWidth + totalGapWidth
			}

			if (getRequiredWidth(tags.length, false) <= containerWidth) {
				finishMeasurement(tags.length)
				return
			}

			for (let count = tags.length - 1; count >= 0; count -= 1) {
				if (getRequiredWidth(count, true) <= containerWidth) {
					finishMeasurement(count)
					return
				}
			}

			finishMeasurement(0)
		}

		calculateVisibleTags()

		const resizeObserver = new ResizeObserver(calculateVisibleTags)

		resizeObserver.observe(container)

		void document.fonts?.ready.then(() => {
			if (isActive) {
				calculateVisibleTags()
			}
		})

		return () => {
			isActive = false
			resizeObserver.disconnect()
		}
	}, [measurementKey, showAll, size, tags])

	if (tags.length === 0 && !showAll) {
		return null
	}

	const visibleTags = size === 'sm' ? tags.slice(0, visibleTagCount) : tags

	const hiddenTagCount = size === 'sm' ? tags.length - visibleTagCount : 0

	return (
		<div
			className={cn(
				'relative w-full',
				size === 'sm' && 'min-h-6',
				className
			)}
		>
			<div
				ref={containerRef}
				aria-hidden={!isMeasured}
				className={cn(
					'flex items-center gap-2',
					size === 'sm' ? 'flex-nowrap overflow-hidden' : 'flex-wrap',
					isMeasured ? 'visible' : 'invisible'
				)}
			>
				{showAll && renderTag('', allLabel, 'all')}

				{visibleTags.map((tag) => renderTag(tag, tag, `tag-${tag}`))}

				{hiddenTagCount > 0 && (
					<span
						className={cn(
							baseTagClassName,
							sizeClasses[size],
							overflowTagClassName
						)}
						title={tags.slice(visibleTagCount).join(', ')}
					>
						+{hiddenTagCount}
					</span>
				)}
			</div>

			<div
				aria-hidden='true'
				className='pointer-events-none invisible absolute left-0 top-0 flex h-0 w-0 items-center gap-2 overflow-hidden'
			>
				{showAll && (
					<span
						ref={allTagMeasureRef}
						className={cn(baseTagClassName, sizeClasses[size])}
					>
						{allLabel}
					</span>
				)}

				{tags.map((tag, index) => (
					<span
						key={`measure-${tag}`}
						ref={(element) => {
							tagMeasureRefs.current[index] = element
						}}
						className={cn(baseTagClassName, sizeClasses[size])}
					>
						{tag}
					</span>
				))}

				<span
					ref={overflowMeasureRef}
					className={cn(baseTagClassName, sizeClasses[size])}
				>
					+0
				</span>
			</div>
		</div>
	)
}
