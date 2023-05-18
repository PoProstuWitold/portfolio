import dayjs from 'dayjs'
import Image from 'next/image'
import React from 'react'
import { RxDotFilled } from 'react-icons/rx'
import { IPost } from './blog-utils'

import Witold from '../../public/images/witold-512.png'

interface BlogInfoProps {
    data: IPost['data']
    readingTime: IPost['readingTime']
    variant?: 'small' | 'normal' | 'big'
}

export const BlogInfo: React.FC<BlogInfoProps> = ({ data, readingTime }) => {
    return (
        <>
            <div className='flex flex-row gap-4 items-center'>
                <Image
                    className='rounded-full'
                    placeholder='blur'
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                    src={Witold} alt="Witold Zawada" width={64} height={64}
                />
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
                        <span className='text-xs'>{readingTime}</span>
                    </div>
                </div>
            </div>
        </>
    )
}