/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowDownCircleFill } from 'react-icons/bs'
import { Socials } from '@/components/Socials'

const Main: React.FC = () => {
	  
	return (
		<motion.section
			id="main"
			className="min-h-screen text-3xl text-center cursor-default bg-base-200"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
		>
			<div className="pt-4 lg:pt-20 hero">
				<div className="justify-between my-auto mt-40 hero-content">
					<div className='flex flex-col gap-4'>
						<motion.h1
							className="text-5xl font-bold flex md:flex-row flex-col"
							initial={{ opacity: 0, scale: 0.7 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.3,
								ease: [0, 0.71, 0.2, 1.01]
							}}
						>
							<span className='mr-3'>Hello, I'm </span>
							<span>
								<span className='text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text'>Witold Zawada</span>.
							</span>
						</motion.h1>
						<motion.p
							className="font-semibold text-2xl"
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.3,
								delay: 0.6,
								ease: [0, 0.71, 0.2, 1.01]
							}}
						>
							Node.js TypeScript developer
						</motion.p>
						<motion.span 
							className='flex flex-row items-center justify-center ml-2 gap-2 mb-10'
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.3,
								delay: 0.9,
								ease: [0, 0.71, 0.2, 1.01]
							}}
						>
						<Socials size="small"/>
						</motion.span>
						<motion.span
							className="flex items-center self-center justify-center text-center"
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.3,
								delay: 1.2,
								ease: [0, 0.71, 0.2, 1.01]
							}}
						>
							<a
								className="animate-bounce"
								href="/#projects"
								title="scroll to projects"
							>
								<BsArrowDownCircleFill className="w-14 h-14 text-secondary"/>
							</a>
						</motion.span>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Main
