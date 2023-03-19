import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

interface FooterProps {
	children?: React.ReactNode
}

export const Footer: React.FC<FooterProps> = () => {
	return (
		<>
			<footer className="p-10 bg-neutral text-neutral-content">
				<div className="footer">
					<div>
						<span className="mb-1 font-bold uppercase">Witold Zawada</span>
						<p>TypeScript Developer</p>
					</div>
					<div>
						<span className="mb-1 font-bold uppercase">Social</span>
						<div className="grid grid-flow-col">
							<div className="flex">
								<a
									href="https://github.com/PoProstuWitold"
									target="_blank"
									rel="noreferrer"
									className="flex flex-row"
								>
									<div className="flex flex-col items-center mr-2">
										<AiFillGithub className="w-10 h-10" /><span className="self-center mx-auto mt-1 text-xs font-semibold">GitHub</span>
									</div>
								</a>
							</div>
							<div className="flex">
								<a
									href="https://www.linkedin.com/in/witoldzawada/"
									target="_blank"
									rel="noreferrer"
									className="flex flex-row"
								>
									<div className="flex flex-col items-center mx-2">
										<AiFillLinkedin className="w-10 h-10" /><span className="self-center mx-auto mt-1 text-xs font-semibold">Linkedin</span>
									</div>
								</a>
							</div>	
							<div className="flex">
								<a
									href="https://discord.com/"
									target="_blank"
									rel="noreferrer"
									className="flex flex-row"
								>
									<div className="flex flex-col items-center mx-2">
										<FaDiscord className="w-10 h-10" /><span className="self-center mx-auto mt-1 text-xs font-semibold">Discord</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					className="my-10 border-t border-neutral-content"
				/>
				<div className="justify-center mx-auto md:text-center">
					<p>
						Copyright © {new Date().getFullYear()} Witold Zawada -
						All rights reserved.
						Check the website 
						<a
							href="https://github.com/PoProstuWitold/portfolio"
							target="_blank"
							rel="noreferrer"
							className="mx-1 link"
						>
							source code
						</a>
					</p>
				</div>
			</footer>
		</>
	)
}
