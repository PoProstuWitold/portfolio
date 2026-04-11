import Link from 'next/link'

export interface BreadcrumbItem {
	label: string
	href?: string
}

export const Breadcrumbs: React.FC<{
	items: BreadcrumbItem[]
	className?: string
}> = ({ items, className = '' }) => {
	return (
		<div className={`md:text-sm text-xs breadcrumbs ${className}`}>
			<ul>
				{items.map((item, index) => {
					const isLast = index === items.length - 1

					return (
						<li
							key={item.label}
							className={
								isLast
									? 'text-primary cursor-default font-semibold'
									: ''
							}
						>
							{isLast || !item.href ? (
								item.label
							) : (
								<Link href={item.href}>{item.label}</Link>
							)}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
