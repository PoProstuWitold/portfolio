import {
	FaCode,
	FaLock,
	FaMemory,
	FaPizzaSlice,
	FaRobot,
	FaSatelliteDish,
	FaServer
} from 'react-icons/fa'

export const caseStudies = new Map<string, React.ReactNode>([
	[
		'homeserver',
		<div key='homeserver' className='flex flex-col gap-8 leading-relaxed'>
			<h3 className='flex items-center gap-2 text-2xl font-bold text-secondary'>
				<FaServer className='shrink-0' /> Self-Hosted Infrastructure
				Setup
			</h3>

			<ul className='ml-2 list-inside list-disc space-y-2 text-lg opacity-90'>
				<li>
					Built and documented self-hosted server environments for
					running multiple services with Docker.
				</li>
				<li>
					Configured reverse proxying, dynamic DNS, and external
					access with Caddy, Cloudflare Tunnels, and port forwarding.
				</li>
				<li>
					Secured public exposure with VPN access, stricter routing
					rules, and credential management.
				</li>
			</ul>

			<div className='rounded-xl border border-base-300 bg-base-200 p-6'>
				<h4 className='mb-4 border-b border-base-300 pb-2 font-bold'>
					Tech Stack
				</h4>

				<div className='grid grid-cols-1 gap-4 text-sm opacity-90 md:grid-cols-2'>
					<p>
						<strong className='text-primary'>
							Routing/Security:
						</strong>{' '}
						Caddy, Cloudflare Tunnels, VPN
					</p>
					<p>
						<strong className='text-secondary'>Infra:</strong>{' '}
						Linux, Docker, Networking
					</p>
				</div>
			</div>
		</div>
	],
	[
		'nuntius-feed',
		<div key='nuntius-feed' className='flex flex-col gap-8 leading-relaxed'>
			<h3 className='flex items-center gap-2 text-2xl font-bold text-secondary'>
				<FaSatelliteDish className='shrink-0' /> RSS and Atom
				Aggregation Platform
			</h3>

			<ul className='ml-2 list-inside list-disc space-y-2 text-lg opacity-90'>
				<li>
					Built an XML parsing pipeline that normalizes RSS and Atom
					feeds into a consistent database model.
				</li>
				<li>
					Added background jobs for scheduled feed syncing and reduced
					delays in content updates.
				</li>
				<li>
					Implemented JWT-based authentication with access and refresh
					token flows.
				</li>
			</ul>

			<div className='rounded-xl border border-base-300 bg-base-200 p-6'>
				<h4 className='mb-4 border-b border-base-300 pb-2 font-bold'>
					Tech Stack
				</h4>

				<div className='grid grid-cols-1 gap-4 text-sm opacity-90 md:grid-cols-3'>
					<p>
						<strong className='text-primary'>Backend:</strong>{' '}
						Node.js, Hono, JWT, RPC
					</p>
					<p>
						<strong className='text-secondary'>Frontend:</strong>{' '}
						Next.js, TailwindCSS
					</p>
					<p>
						<strong className='text-accent'>Infra:</strong> MongoDB,
						Docker, Cron
					</p>
				</div>
			</div>
		</div>
	],
	[
		'dove-dashboard',
		<div
			key='dove-dashboard'
			className='flex flex-col gap-8 leading-relaxed'
		>
			<h3 className='flex items-center gap-2 text-2xl font-bold text-secondary'>
				<FaMemory className='shrink-0' /> System Monitoring Dashboard
			</h3>

			<ul className='ml-2 list-inside list-disc space-y-2 text-lg opacity-90'>
				<li>
					Built a lightweight monitoring daemon in Go for collecting
					CPU, RAM, and other system metrics.
				</li>
				<li>
					Kept runtime memory usage below 25 MB and shipped the app as
					a small rootless Docker image.
				</li>
				<li>
					Used plain JavaScript, HTML, and CSS for real-time data
					visualization without heavy frontend frameworks.
				</li>
			</ul>

			<div className='rounded-xl border border-base-300 bg-base-200 p-6'>
				<h4 className='mb-4 border-b border-base-300 pb-2 font-bold'>
					Tech Stack
				</h4>

				<div className='grid grid-cols-1 gap-4 text-sm opacity-90 md:grid-cols-3'>
					<p>
						<strong className='text-primary'>Backend:</strong> Go
					</p>
					<p>
						<strong className='text-secondary'>Frontend:</strong>{' '}
						JavaScript, HTML5, CSS3
					</p>
					<p>
						<strong className='text-accent'>Infra:</strong> Linux,
						Docker
					</p>
				</div>
			</div>
		</div>
	],
	[
		'doggopaste',
		<div key='doggopaste' className='flex flex-col gap-8 leading-relaxed'>
			<h3 className='flex items-center gap-2 text-2xl font-bold text-secondary'>
				<FaLock className='shrink-0' /> Real-Time Code Collaboration
				Platform
			</h3>

			<ul className='ml-2 list-inside list-disc space-y-2 text-lg opacity-90'>
				<li>
					Synchronized live editor state across multiple clients with
					WebSockets.
				</li>
				<li>
					Added client-side AES-GCM encryption using the Web Crypto
					API.
				</li>
				<li>
					Built REST and WebSocket backends with Hono and a custom
					proxy layer.
				</li>
				<li>
					Packaged the application for self-hosted deployment with
					Docker.
				</li>
			</ul>

			<div className='rounded-xl border border-base-300 bg-base-200 p-6'>
				<h4 className='mb-4 border-b border-base-300 pb-2 font-bold'>
					Tech Stack
				</h4>

				<div className='grid grid-cols-1 gap-4 text-sm opacity-90 md:grid-cols-3'>
					<p>
						<strong className='text-primary'>Backend:</strong>{' '}
						Node.js, Hono, WebSockets
					</p>
					<p>
						<strong className='text-secondary'>Frontend:</strong>{' '}
						Next.js, TailwindCSS
					</p>
					<p>
						<strong className='text-accent'>Infra:</strong>{' '}
						PostgreSQL, Docker, Turborepo
					</p>
				</div>
			</div>
		</div>
	],
	[
		'Sayuna',
		<div key='Sayuna' className='flex flex-col gap-8 leading-relaxed'>
			<h3 className='flex items-center gap-2 text-2xl font-bold text-secondary'>
				<FaRobot className='shrink-0' /> Discord Bot and Service
				Platform
			</h3>

			<ul className='ml-2 list-inside list-disc space-y-2 text-lg opacity-90'>
				<li>
					Built a modular bot architecture with dependency injection
					for music, moderation, and logging features.
				</li>
				<li>
					Added a web dashboard for configuration, control, and easier
					debugging.
				</li>
				<li>
					Used multi-stage Docker builds and environment-based
					configuration for deployment.
				</li>
			</ul>

			<div className='rounded-xl border border-base-300 bg-base-200 p-6'>
				<h4 className='mb-4 border-b border-base-300 pb-2 font-bold'>
					Tech Stack
				</h4>

				<div className='grid grid-cols-1 gap-4 text-sm opacity-90 md:grid-cols-2'>
					<p>
						<strong className='text-primary'>Backend:</strong>{' '}
						TypeScript, Node.js, discord.js, discordx
					</p>
					<p>
						<strong className='text-secondary'>Infra:</strong>{' '}
						Docker
					</p>
				</div>
			</div>
		</div>
	],
	[
		'portfolio',
		<div key='portfolio' className='flex flex-col gap-8 leading-relaxed'>
			<h3 className='flex items-center gap-2 text-2xl font-bold text-secondary'>
				<FaCode className='shrink-0' /> Static Developer Portfolio
			</h3>

			<ul className='ml-2 list-inside list-disc space-y-2 text-lg opacity-90'>
				<li>
					Built a static portfolio with Next.js App Router and strong
					Lighthouse scores.
				</li>
				<li>
					Added a Markdown-based blog with syntax highlighting for
					technical posts.
				</li>
				<li>
					Fetched GitHub project data at build time using the GraphQL
					API.
				</li>
			</ul>

			<div className='rounded-xl border border-base-300 bg-base-200 p-6'>
				<h4 className='mb-4 border-b border-base-300 pb-2 font-bold'>
					Tech Stack
				</h4>

				<div className='grid grid-cols-1 gap-4 text-sm opacity-90 md:grid-cols-3'>
					<p>
						<strong className='text-primary'>Frontend:</strong>{' '}
						Next.js, React
					</p>
					<p>
						<strong className='text-secondary'>UI/Style:</strong>{' '}
						TailwindCSS, daisyUI
					</p>
					<p>
						<strong className='text-accent'>Data/API:</strong>{' '}
						GraphQL, Markdown
					</p>
				</div>
			</div>
		</div>
	],
	[
		'pizzeria',
		<div key='pizzeria' className='flex flex-col gap-8 leading-relaxed'>
			<h3 className='flex items-center gap-2 text-2xl font-bold text-secondary'>
				<FaPizzaSlice className='shrink-0' /> Vanilla JavaScript SPA
			</h3>

			<ul className='ml-2 list-inside list-disc space-y-2 text-lg opacity-90'>
				<li>
					Built a single-page application from scratch in vanilla
					JavaScript without frontend frameworks.
				</li>
				<li>
					Created a custom HTTP server in Node.js for routing and
					static asset handling.
				</li>
				<li>
					Implemented client-side navigation with the History API to
					avoid full page reloads.
				</li>
			</ul>

			<div className='rounded-xl border border-base-300 bg-base-200 p-6'>
				<h4 className='mb-4 border-b border-base-300 pb-2 font-bold'>
					Tech Stack
				</h4>

				<div className='grid grid-cols-1 gap-4 text-sm opacity-90 md:grid-cols-2'>
					<p>
						<strong className='text-primary'>Frontend:</strong>{' '}
						Vanilla JavaScript, HTML5, CSS3
					</p>
					<p>
						<strong className='text-secondary'>
							Backend/Infra:
						</strong>{' '}
						Node.js, Docker
					</p>
				</div>
			</div>
		</div>
	]
])
