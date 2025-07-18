import dayjs from 'dayjs'
import Image from 'next/image'
import type React from 'react'
import { RxDotFilled } from 'react-icons/rx'
import Witold from '../../../public/images/witold-512.png'
import type { IPost } from '../../utils/blog-utils'

interface BlogInfoProps {
	data: IPost['data']
	readingTime: IPost['readingTime']
	variant?: 'small' | 'normal' | 'big'
}

export const BlogInfo: React.FC<BlogInfoProps> = ({ data, readingTime }) => {
	return (
		<div className='flex flex-row gap-4 items-center px-1'>
			<Image
				className='rounded-full'
				placeholder='blur'
				style={{
					width: '64px'
				}}
				src={Witold}
				alt='Witold Zawada'
			/>
			<div className='flex flex-col'>
				{data.authors.length >= 2 ? (
					<p className='font-bold'>{`${data.authors.join(', ')}`}</p>
				) : (
					<p className='font-bold'>{`${data.authors}`}</p>
				)}
				<div className='flex items-center flex-wrap'>
					<span>{`${dayjs(data.date).format('DD MMMM YYYY, HH:mm')}`}</span>
					<RxDotFilled className='w-5 h-5' />
					<span className='text-sm'>{readingTime}</span>
				</div>
				{data.updated && (
					<span className='italic text-sm'>
						<span className='font-semibold'>Updated: </span>
						{`${dayjs(data.updated).format('DD MMMM YYYY, HH:mm')}`}
					</span>
				)}
			</div>
		</div>
	)
}
