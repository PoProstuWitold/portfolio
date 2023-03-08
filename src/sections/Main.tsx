/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowDownCircleFill } from 'react-icons/bs'

const Main: React.FC = () => {
	return (
		<motion.section
			id="main"
			className="min-h-screen text-3xl text-center cursor-default bg-base-200"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
		>
			<div className="pt-4 lg:pt-20 hero">
				<div className="flex-col justify-between my-auto mt-40 hero-content lg:flex-row">
					<div>
						<motion.h1
							className="text-5xl font-bold text-primary"
							initial={{ opacity: 0, scale: 0.2 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.3,
								ease: [0, 0.71, 0.2, 1.01]
							}}
						>
							Hello, I'm Witold Zawada
						</motion.h1>
						<motion.p
							className="py-6 mb-10"
							initial={{ opacity: 0, scale: 0.2 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.3,
								delay: 0.6,
								ease: [0, 0.71, 0.2, 1.01]
							}}
						>
							TypeScript developer
						</motion.p>
						<motion.a
							className="flex items-center self-center justify-center text-center hover:cursor-pointer"
							href="/#projects"
							initial={{ opacity: 0, scale: 0.0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.3,
								delay: 1.0,
								ease: [0, 0.71, 0.2, 1.01]
							}}
						>
							<motion.span
								animate={{ y: 10 }}
								transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
							>
								<BsArrowDownCircleFill className="w-14 h-14 text-secondary"/>
							</motion.span>
						</motion.a>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Main
