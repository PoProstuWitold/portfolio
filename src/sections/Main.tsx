/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'

const Main: React.FC = () => {
	return (
		<motion.section
			id="main"
			className="min-h-screen text-3xl text-center bg-base-200"
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
							href="/#projects"
							className="btn btn-primary btn-lg"
							initial={{ opacity: 0, scale: 0.0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.3,
								delay: 1.0,
								ease: [0, 0.71, 0.2, 1.01]
							}}
						>
							Check projects
						</motion.a>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default Main
