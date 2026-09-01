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
		<nav
			aria-label='Breadcrumb'
			className={`breadcrumbs text-xs md:text-sm ${className}`}
		>
			<ul>
				{items.map((item, index) => {
					const isLast = index === items.length - 1

					return (
						<li
							key={`${item.href ?? 'current'}:${item.label}`}
							className={
								isLast
									? 'text-primary cursor-default font-semibold'
									: ''
							}
						>
							{isLast ? (
								<span aria-current='page'>{item.label}</span>
							) : !item.href ? (
								<span>{item.label}</span>
							) : (
								<Link href={item.href}>{item.label}</Link>
							)}
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
