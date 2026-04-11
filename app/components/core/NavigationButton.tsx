import Link from 'next/link'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

export interface NavigationButtonProps {
	href: string
	label: string
	direction?: 'left' | 'right'
	className?: string
}

export const NavigationButton: React.FC<NavigationButtonProps> = ({
	href,
	label,
	direction = 'left',
	className = ''
}) => {
	return (
		<Link href={href} className={`btn btn-outline mt-10 ${className}`}>
			{direction === 'left' && <AiOutlineArrowLeft className='w-5 h-5' />}
			{label}
			{direction === 'right' && (
				<AiOutlineArrowRight className='w-5 h-5' />
			)}
		</Link>
	)
}
