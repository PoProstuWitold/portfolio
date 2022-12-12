import React from 'react'

const Contact: React.FC = () => {
	return (
		<section id="contact" className="min-h-screen pb-20 bg-base-100">
			<br />
			<br />
			<h1 className="text-4xl font-bold">Contact me</h1>
			<br />
			<div
				className="w-4/5 mx-auto border-[1px] shadow-2xl rounded-2xl"
				style={{ borderColor: 'hsl(var(--n)' }}
			>
				<div className="p-6 sm:rounded-md">
					<form>
						<div className="flex flex-col justify-between mx-auto lg:flex-row">
							<div className="w-full max-w-lg mb-5 form-control">
								<label className="label">
									<span className="label-text">Name</span>
									<span className="italic label-text-alt">
										eg. Witold
									</span>
								</label>
								<input
									type="text"
									placeholder="Type here"
									className="w-full max-w-lg input input-bordered"
								/>
							</div>
							<div className="w-full max-w-lg mb-5 form-control">
								<label className="label">
									<span className="label-text">Email</span>
									<span className="italic label-text-alt">
										eg. witold@email.com
									</span>
								</label>
								<input
									type="text"
									placeholder="Type here"
									className="w-full max-w-lg input input-bordered"
								/>
							</div>
						</div>
						<div className="mt-5 mb-10 form-control">
							<label className="label">
								<span className="label-text">Title</span>
								<span className="italic label-text-alt">
									eg. Hello...
								</span>
							</label>
							<input
									type="text"
									placeholder="Type here"
									className="w-full input input-bordered"
								/>
						</div>
						<div className="mb-10 form-control">
							<label className="label">
								<span className="label-text">Message</span>
								<span className="italic label-text-alt">
									eg. Hello...
								</span>
							</label>
							<textarea
								className="h-24 textarea textarea-bordered"
								placeholder="Write your messages"
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
