import dayjs from 'dayjs'
import Image from 'next/image'
import React from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { IPost } from './blog-utils'

interface BlogInfoProps {
    data: IPost['data']
    readingTime: IPost['readingTime']
    variant?: 'small' | 'normal' | 'big'
}

export const BlogInfo: React.FC<BlogInfoProps> = ({ data, readingTime }) => {
    return (
        <>
            <div className='flex flex-row gap-4 items-center'>
                <Image className='min-h-16 min-w-16 rounded-full' placeholder='blur' blurDataURL={`/images/witold-512.png`} src={`/images/witold-512.png`} style={{objectFit: 'cover'}} alt="" width={64} height={64} />
                <div className="flex flex-col">
                    {data.authors.length >= 2 ?
                        <>
                            <p className="font-bold">{`${data.authors.join(', ')}`}</p>
                        </>
                        :
                        <>
                            <p className="font-bold">{`${data.authors}`}</p>
                        </>
                    }
                    <div className='flex items-center flex-wrap'>
                        <span>{`${dayjs(data.date).format('DD MMMM YYYY, HH:mm')}`}</span>
                        <RxDotFilled className='w-5 h-5' />
                        <span>{readingTime}</span>
                    </div>
                </div>
            </div>
        </>
    )
}