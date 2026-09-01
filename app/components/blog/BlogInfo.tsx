import Image from 'next/image'
import type React from 'react'
import { RxDotFilled } from 'react-icons/rx'
import {
	formatPostDate,
	type PostMetadata,
	toIsoPostDate
} from '@/blog/post-domain'
import Witold from '../../../public/images/witold-512.png'

interface BlogInfoProps {
	metadata: PostMetadata
	readingTime: string
}

export const BlogInfo: React.FC<BlogInfoProps> = ({
	metadata,
	readingTime
}) => {
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
				<p className='font-bold'>{metadata.authors.join(', ')}</p>
				<div className='flex items-center flex-wrap'>
					<time dateTime={toIsoPostDate(metadata.date)}>
						{formatPostDate(metadata.date)}
					</time>
					<RxDotFilled aria-hidden='true' className='w-5 h-5' />
					<span className='text-sm'>{readingTime}</span>
				</div>
				{metadata.updated && (
					<span className='italic text-sm'>
						<span className='font-semibold'>Updated: </span>
						<time dateTime={toIsoPostDate(metadata.updated)}>
							{formatPostDate(metadata.updated)}
						</time>
					</span>
				)}
			</div>
		</div>
	)
}
