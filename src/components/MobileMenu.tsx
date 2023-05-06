import { Menu } from '@headlessui/react'
import { useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { AiFillBook, AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { MdComputer } from 'react-icons/md'
import { AiOutlineMail, AiOutlineClose } from 'react-icons/ai'
import { Socials } from './Socials'

export default function MobileMenu() {
    const [Y, setY] = useState<number>(0)
	const { scrollY } = useScroll()
    useEffect(() => {
		const unsubscribeScroll = scrollY.on('change', (y) => {
			if(y > 100) setY(y)
			else setY(0)
		})
		return () => {
			unsubscribeScroll()
		}
	}, [])
    return (
        <Menu as="div" className="z-50">
            {({ open }) => (
                <>
                    <Menu.Button 
                        className="justify-center btn btn-ghost"
                        title='Mobile Menu'
                    >
                        <AiOutlineClose className={`w-7 h-7 ${open ? '' : 'hidden'}`} /> 
                        <AiOutlineMenu className={`w-7 h-7 ${open ? 'hidden' : ''}`} />
                    </Menu.Button>
                    <Menu.Items 
                        className={`mt-2 gap-4 flex px-6 py-4 absolute left-0 w-screen origin-top-left h-screen transition ease-in-out delay-[50ms] font-semibold bg-base-200 justify-stretch menu menu-vertical ${Y > 5 ? 'bg-base-300' : ''}`}
                    >
                        <Menu.Item>
                            <h2 className='font-bold cursor-pointer text-xl'>Menu</h2>
                        </Menu.Item>
                        <Menu.Item>
                            <li className='hover:text-secondary transition-all duration-150'>
                                <a href="/#about">
                                    <AiOutlineInfoCircle className='w-7 h-7' />About
                                </a>
                            </li>
                        </Menu.Item>
                        <Menu.Item>
                            <li className='hover:text-secondary transition-all duration-150'>
                                <a href="/#projects">
                                    <MdComputer className='w-7 h-7' /> Projects
                                </a>
                            </li>
                        </Menu.Item>
                        <Menu.Item>
                            <li className='hover:text-secondary transition-all duration-150'>
                                <a href="/#contact">
                                    <AiOutlineMail className='w-7 h-7' /> Contact
                                </a>
                            </li>
                        </Menu.Item>
                        <Menu.Item>
                            <li className='hover:text-secondary transition-all duration-150'>
                                <a href="/blog">
                                    <AiFillBook className='w-7 h-7' /> Blog
                                </a>
                            </li>
                        </Menu.Item>
                        <Menu.Item>
                            <h2 className='font-bold cursor-pointer text-xl'>Links</h2>
                        </Menu.Item>
                        <Menu.Item>
                            <div className='flex mx-4'>
                                <Socials text size='big'/>
                            </div>
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}