/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { RxDiscordLogo } from 'react-icons/rx'

const Contact: React.FC = () => {
	return (
		<section id="contact" className="min-h-screen pt-20 flex flex-col gap-8 py-10 cursor-default bg-base-100">
			<h1 className="text-4xl font-bold border-b-[5px] w-fit mx-auto pb-2 border-primary">Contact me</h1>
			<div className="flex flex-col lg:flex-row lg:mx-14">
			<div className="m-5 text-left lg:w-1/3">
				<h2 className="mb-4 text-4xl font-semibold">Get in touch</h2>
				<p className="text-2xl text-justify">
					If you have any questions feel free to contact me using informations below or contact form
				</p>
				<div className="flex flex-col my-10 text-2xl">
					<div className="flex flex-row items-center font-semibold">
						<RxDiscordLogo /><span className="ml-2">Want to call me?</span>
					</div>
					<span>
						<a
							className="underline"
							target="_blank"
							rel="noreferrer"
							href={'https://discord.com/'}
						>
							Shedule call with me
						</a>
					</span>
					<div className="flex flex-row items-center mt-5 font-semibold">
						<AiOutlineMail /><span className="ml-2">Want to mail me?</span>
					</div>
					<span>
						<a
							className="underline"
							target="_blank"
							rel="noreferrer"
							href={'mailto:witold@dev.com'}
						>
							witold@dev.com
						</a>
					</span>
				</div>
			</div>
			<div
				className="m-5 lg:w-2/3 rounded-2xl bg-base-200 border-primary"
				style={{ borderColor: 'hsl(var(--n)' }}
			>
				<div className="p-6 rounded-2xl shadow-md">
					<form>
						<div className="flex flex-col justify-between mx-auto lg:flex-row">
							<div className="w-full mb-5 mr-10 form-control">
								<label className="label">
									<span className="label-text">Name</span>
									<span className="italic label-text-alt">
										e.g. Witold
									</span>
								</label>
								<input
									type="text"
									placeholder="Your name"
									className="w-full input input-bordered"
								/>
							</div>
							<div className="w-full mb-5 form-control">
								<label className="label">
									<span className="label-text">Email</span>
									<span className="italic label-text-alt">
										e.g. witold@email.com
									</span>
								</label>
								<input
									type="text"
									placeholder="Your email"
									className="w-full input input-bordered"
								/>
							</div>
						</div>
						<div className="mb-5 form-control">
							<label className="label">
								<span className="label-text">Title</span>
								<span className="italic label-text-alt">
									e.g. New amazing project..
								</span>
							</label>
							<input
									type="text"
									placeholder="Title of your message"
									className="w-full input input-bordered"
								/>
						</div>
						<div className="mb-10 form-control">
							<label className="label">
								<span className="label-text">Content</span>
								<span className="italic label-text-alt">
									e.g. Hello Witold, I'm writing to ask...
								</span>
							</label>
							<textarea
								className="h-24 textarea textarea-bordered"
								placeholder="Content of your message"
							></textarea>
						</div>
						<div className="flex justify-center">
							<button
								type="submit"
								className="btn btn-lg btn-outline w-60"
								disabled
							>
								Work in progress
							</button>
						</div>
					</form>
				</div>
			</div>
			</div>
		</section>
	)
}

export default Contact
