import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

interface FooterProps {
	children?: React.ReactNode
}

const Footer: React.FC<FooterProps> = () => {
	return (
		<>
			<footer className="p-10 bg-neutral text-neutral-content">
				<div className="footer">
					<div>
						<span className="mb-1 font-bold uppercase">Witold Zawada</span>
						<p>Beginner TypeScript Developer</p>
					</div>
					<div>
						<span className="mb-1 font-bold uppercase">Social</span>
						<div className="grid grid-flow-col">
							<div className="flex gap-5">
								<a
									href="https://github.com/PoProstuWitold"
									target="_blank"
									rel="noreferrer"
									className="flex flex-row"
								>
									<div className="flex flex-col">
										<AiFillGithub className="w-10 h-10" /><span className="self-center mx-auto mt-1 text-xs font-semibold">GitHub</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div
					className="my-10 border-t border-neutral-content"
				/>
				<div className="justify-center mx-auto footer">
					<p>
						Copyright © {new Date().getFullYear()} Witold Zawada -
						All rights reserved
					</p>
				</div>
			</footer>
		</>
	)
}

export default Footer
