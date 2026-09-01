import type { ReactNode } from 'react'

import type { ProjectSlug } from './data'
import type { ProjectCaseStudy } from './types'

function Highlight({ children }: { children: ReactNode }) {
	return (
		<strong className='font-semibold text-base-content'>{children}</strong>
	)
}

function Metric({ children }: { children: ReactNode }) {
	return (
		<span className='badge badge-outline badge-sm mx-0.5 align-middle font-semibold'>
			{children}
		</span>
	)
}

function Tech({ children }: { children: ReactNode }) {
	return (
		<code className='rounded bg-base-200 px-1.5 py-0.5 font-mono text-[0.9em] text-base-content'>
			{children}
		</code>
	)
}

export const caseStudies = {
	doggopaste: {
		challenge: (
			<p>
				Code-sharing workflows often split durable, link-based pastes
				and live collaboration across different tools. DoggoPaste was
				built to support both while preserving access control,
				selfhosting, and a straightforward sharing model.
			</p>
		),

		engineering: (
			<div className='space-y-3'>
				<p>
					Together with{' '}
					<a
						href='https://github.com/Netr0n07'
						target='_blank'
						rel='noopener noreferrer'
						className='link link-primary font-semibold'
					>
						Netr0n07
					</a>
					, I co-developed DoggoPaste as a{' '}
					<Highlight>fullstack TypeScript monorepo</Highlight> built
					with Next.js, Hono, Socket.IO, PostgreSQL, and Drizzle ORM.
				</p>

				<p>
					The backend uses explicit authorization policies, database
					constraints and transactions, revision-based{' '}
					<Tech>compare-and-swap</Tech> persistence for real-time
					data, rate limiting, browser-side <Tech>AES-GCM</Tech>{' '}
					encryption, burn-after-read semantics, and OpenAPI
					contracts.
				</p>

				<p>
					The project also includes unit, contract, migration,
					security-regression, and real-PostgreSQL integration tests.
				</p>
			</div>
		),

		outcome: (
			<p>
				DoggoPaste became our engineering thesis and received the
				highest possible grade,{' '}
				<Metric>5.0/5.0 with distinction</Metric>. It is maintained as a
				deployable selfhosted application with documented architecture,
				API documentation, operational health checks, and a test suite
				of <Metric>150+ automated tests</Metric>.
			</p>
		)
	},

	homeserver: {
		challenge: (
			<p>
				Running services at home involves much more than starting Docker
				containers. Networking, service exposure, remote access, reverse
				proxies, virtualization, security, storage, and long-term
				maintenance all need to work together.
			</p>
		),

		engineering: (
			<p>
				I evolved the same home server through{' '}
				<Metric>three architectures</Metric>: an early Cloudflare Tunnel
				setup, a bare-metal Linux and Docker environment using direct
				port forwarding, Caddy, and VPN access, and the current{' '}
				<Highlight>Proxmox VE architecture</Highlight> based on virtual
				machines, LXC containers, and Infrastructure as Code. The
				repository documents not only deployment steps, but also the
				tradeoffs and migration decisions behind each iteration.
			</p>
		),

		outcome: (
			<p>
				The result is both an{' '}
				<Highlight>actively used homelab</Highlight> and a practical
				reference for building one. The completed bare-metal
				architecture remains documented as a stable implementation,
				while the Proxmox-based environment continues to evolve as the
				current platform.
			</p>
		)
	},

	'nuntius-feed': {
		challenge: (
			<p>
				RSS and Atom are simple formats individually, but a useful feed
				reader also needs reliable refreshes, content caching, per-user
				subscription state, authentication, and a consistent way to
				manage many different sources.
			</p>
		),

		engineering: (
			<p>
				I built the application with a Next.js frontend and a{' '}
				<Highlight>Hono RPC backend</Highlight> backed by MongoDB. It
				implements access and refresh JWTs with automatic client-side
				token refresh, RSS and Atom ingestion, cached feed items,
				periodic background refreshes, per-user subscriptions and
				favorites, OPML import and export, and administrative feed
				management.
			</p>
		),

		outcome: (
			<p>
				The result is a <Highlight>selfhostable feed reader</Highlight>{' '}
				that combines feed ingestion, caching, subscription management,
				authentication, and article reading in a single deployable
				application.
			</p>
		)
	},

	'dove-dashboard': {
		challenge: (
			<p>
				Checking basic server health should not always require a
				complete monitoring stack or switching between several
				command-line utilities.
			</p>
		),

		engineering: (
			<p>
				I built a lightweight system monitor in Go with{' '}
				<Metric>zero external Go dependencies</Metric>. It collects
				host, CPU, memory, storage, sensor, and network information and
				exposes it through a minimal web interface with automatic live
				refreshes. Static frontend assets are embedded directly into the
				application.
			</p>
		),

		outcome: (
			<p>
				The finished application is distributed as a{' '}
				<Metric>single binary</Metric> and as a Docker image, keeping
				deployment simple when only a concise overview of essential
				system health is needed.
			</p>
		)
	},

	sayuna: {
		challenge: (
			<p>
				Discord communities often rely on several separate bots for
				moderation, music, entertainment, and administrative tasks,
				resulting in fragmented configuration and overlapping
				functionality.
			</p>
		),

		engineering: (
			<p>
				I developed Sayuna as a{' '}
				<Highlight>modular TypeScript application</Highlight> using
				Node.js, discord.js, discordx, and dependency injection. Its
				features include moderation commands, multi-source music
				playback, a real-time music dashboard, entertainment commands,
				owner-only tooling, structured logging, global error handling,
				and environment-based configuration.
			</p>
		),

		outcome: (
			<p>
				The project consolidates these capabilities into one{' '}
				<Highlight>configurable and selfhostable bot</Highlight>, with
				documented Docker deployment and a published container image for
				straightforward operation.
			</p>
		)
	},

	portfolio: {
		challenge: (
			<p>
				A technical portfolio needs to present projects and writing
				clearly while keeping routine content changes simple and
				avoiding unnecessary dependence on external services.
			</p>
		),

		engineering: (
			<p>
				I built the site with Next.js around a{' '}
				<Highlight>local-first content model</Highlight>. The blog is
				backed by Markdown and includes syntax highlighting, tags,
				reading-time estimates, and copyable code blocks. Project pages
				combine locally maintained descriptions and case studies with
				optional repository metadata retrieved through the GitHub
				GraphQL API.
			</p>
		),

		outcome: (
			<p>
				The result is a single maintainable site for my projects and
				technical writing. Its{' '}
				<Highlight>core content does not depend on GitHub</Highlight>,
				while repository data can still enrich project pages whenever
				the API is available.
			</p>
		)
	},

	pizzeria: {
		challenge: (
			<p>
				Building a single-page application without a frontend framework
				requires implementing routing, component rendering, state
				persistence, form handling, and browser API integration directly
				in JavaScript.
			</p>
		),

		engineering: (
			<p>
				I built the application in vanilla JavaScript around a{' '}
				<Highlight>custom React-like component system</Highlight> with
				dynamic imports and History API routing. It includes a
				Pixabay-powered gallery using the Fetch API, a validated
				reservation workflow with editable localStorage persistence,
				custom 404 handling, and a Node.js server for serving SPA
				routes.
			</p>
		),

		outcome: (
			<p>
				The educational project resulted in a complete{' '}
				<Highlight>framework-free SPA</Highlight> with client-side
				routing, persistent user data, external API integration, dynamic
				views, and Docker support.
			</p>
		)
	}
} as const satisfies Readonly<Record<ProjectSlug, ProjectCaseStudy>>

export function getCaseStudyBySlug(slug: ProjectSlug): ProjectCaseStudy {
	return caseStudies[slug]
}
