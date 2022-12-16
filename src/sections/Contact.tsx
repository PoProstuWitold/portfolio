/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Contact: React.FC = () => {
	return (
		<section id="contact" className="min-h-screen pb-20 bg-base-100">
			<br />
			<br />
			<h1 className="text-4xl font-bold">Contact me</h1>
			<br />
			<div
				className="mx-auto lg:shadow-2xl sm:w-full md:w-4/5 lg:rounded-2xl"
				style={{ borderColor: 'hsl(var(--n)' }}
			>
				<div className="p-6 sm:rounded-md">
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
						<div>
							<button
								type="submit"
								className="btn btn-lg btn-outline w-60"
							>
								Contact
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Contact
