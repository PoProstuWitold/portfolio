import { FormSettings } from '@/components/FormSettings'
/* eslint-disable react/no-unescaped-entities */
import { Socials } from '@/components/Socials'
import { myInfo } from 'app/utils/constans'
import { AiOutlineMail } from 'react-icons/ai'
import { RxDiscordLogo } from 'react-icons/rx'

const Contact: React.FC = () => {
	return (
		<section
			id='contact'
			className='min-h-screen pt-20 flex flex-col gap-8 py-10 cursor-default bg-base-100'
		>
			<h1 className='text-4xl font-bold border-b-[5px] w-fit mx-auto pb-2 border-primary'>
				Contact me
			</h1>
			<div className='lg:mx-[5rem] flex flex-col lg:flex-row mx-6 gap-6'>
				<div className='text-left lg:w-1/3 flex flex-col gap-6'>
					<h2 className='text-3xl font-semibold'>Get in touch</h2>
					<p className='text-xl text-justify'>
						If you have any questions feel free to contact me using
						informations below or contact form
					</p>
					<div className='flex flex-col text-2xl gap-10 h-full'>
						<div>
							<div className='flex flex-row items-center font-semibold gap-2'>
								<RxDiscordLogo className='w-6 h-6' />
								<span>Want to call me?</span>
							</div>
							<span>
								<a
									className='underline'
									target='_blank'
									rel='noreferrer'
									href={
										'https://discord.com/users/460167435471945748'
									}
								>
									Shedule call with me
								</a>
							</span>
						</div>
						<div>
							<div className='flex flex-row items-center font-semibold gap-2'>
								<AiOutlineMail className='w-6 h-6' />
								<span>Want to mail me?</span>
							</div>
							<span>
								<a
									className='underline'
									target='_blank'
									rel='noreferrer'
									href={'mailto:witoldzawada.dev@gmail.com'}
								>
									witoldzawada.dev@gmail.com
								</a>
							</span>
						</div>
						<div>
							<div className='flex'>
								<Socials size='big' />
							</div>
						</div>
					</div>
				</div>
				<div className='lg:w-2/3 rounded-2xl bg-base-200'>
					<div className='p-6 rounded-2xl shadow-md'>
						<form
							className='flex flex-col gap-6'
							method='POST'
							action={`https://formsubmit.co/${myInfo.randomStringEmail}`}
						>
							<FormSettings />
							<div className='flex flex-col justify-between gap-6 lg:flex-row'>
								<div className='w-full form-control'>
									<label
										className='label py-1'
										htmlFor='name'
									>
										<span className='label-text font-semibold'>
											Name
										</span>
										<span className='italic label-text-alt'>
											e.g. Witold
										</span>
									</label>
									<input
										placeholder='Your name'
										className='w-full input input-bordered'
										type='text'
										name='name'
										required
									/>
								</div>
								<div className='w-full form-control'>
									<label
										className='label py-1'
										htmlFor='email'
									>
										<span className='label-text font-semibold'>
											Email
										</span>
										<span className='italic label-text-alt'>
											e.g. witold@email.com
										</span>
									</label>
									<input
										placeholder='Your email'
										className='w-full input input-bordered'
										type='email'
										name='email'
										required
									/>
								</div>
							</div>
							<div className='form-control'>
								<label className='label py-1' htmlFor='title'>
									<span className='label-text font-semibold'>
										Title
									</span>
									<span className='italic label-text-alt'>
										e.g. New amazing project..
									</span>
								</label>
								<input
									placeholder='Title of your message'
									className='w-full input input-bordered'
									type='text'
									name='title'
									required
								/>
							</div>
							<div className='form-control mb-6'>
								<label className='label py-1' htmlFor='content'>
									<span className='label-text font-semibold'>
										Content
									</span>
									<span className='italic label-text-alt'>
										e.g. Hello Witold, I'm writing to ask...
									</span>
								</label>
								<textarea
									placeholder='Content of your message'
									className='textarea textarea-md textarea-bordered w-full'
									name='content'
									required
								/>
							</div>
							<div className='flex justify-center'>
								<button
									type='submit'
									className='btn btn-lg btn-outline md:w-full w-60'
								>
									Send
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
