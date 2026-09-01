import type { JSX } from 'react'
import {
	BiLogoGoLang,
	BiLogoMongodb,
	BiLogoPostgresql,
	BiPlug,
	BiTransferAlt
} from 'react-icons/bi'
import { BsGithub, BsMarkdownFill } from 'react-icons/bs'
import { DiCss3, DiRedis } from 'react-icons/di'
import {
	FaClock,
	FaCode,
	FaEnvelope,
	FaHtml5,
	FaNetworkWired,
	FaNodeJs,
	FaRobot,
	FaShieldAlt
} from 'react-icons/fa'
import { LuContainer } from 'react-icons/lu'
import { MdHistory, MdMonitorHeart } from 'react-icons/md'
import {
	SiBetterauth,
	SiCaddy,
	SiCloudflare,
	SiDiscord,
	SiDocker,
	SiDrizzle,
	SiFfmpeg,
	SiGraphql,
	SiHono,
	SiJavascript,
	SiJsonwebtokens,
	SiLinux,
	SiNestjs,
	SiNextdotjs,
	SiOpenapiinitiative,
	SiProxmox,
	SiReact,
	SiRss,
	SiSocketdotio,
	SiTailwindcss,
	SiTurborepo,
	SiTypescript,
	SiWireguard
} from 'react-icons/si'
import {
	TbApi,
	TbBoxMultiple,
	TbCirclesRelation,
	TbRoute
} from 'react-icons/tb'

export type SkillInfo = {
	icon: JSX.Element
	url: string | null
	linkDescription?: string
}

export const skillDataMap = {
	TypeScript: {
		icon: <SiTypescript />,
		url: 'https://www.typescriptlang.org/'
	},
	JavaScript: {
		icon: <SiJavascript />,
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
	},
	'Node.js': { icon: <FaNodeJs />, url: 'https://nodejs.org/' },
	'Nest.js': { icon: <SiNestjs />, url: 'https://nestjs.com/' },
	'Next.js': { icon: <SiNextdotjs />, url: 'https://nextjs.org/' },
	React: { icon: <SiReact />, url: 'https://react.dev/' },
	MongoDB: { icon: <BiLogoMongodb />, url: 'https://www.mongodb.com/' },
	PostgreSQL: {
		icon: <BiLogoPostgresql />,
		url: 'https://www.postgresql.org/'
	},
	Docker: { icon: <SiDocker />, url: 'https://www.docker.com/' },
	Redis: { icon: <DiRedis />, url: 'https://redis.io/' },
	TailwindCSS: {
		icon: <SiTailwindcss />,
		url: 'https://tailwindcss.com/',
		linkDescription: 'Tailwind CSS'
	},
	Hono: { icon: <SiHono />, url: 'https://hono.dev/' },
	'Better Auth': {
		icon: <SiBetterauth />,
		url: 'https://better-auth.com/'
	},
	'Drizzle ORM': {
		icon: <SiDrizzle />,
		url: 'https://drizzle.team/docs/orm'
	},
	'Socket.IO': {
		icon: <SiSocketdotio />,
		url: 'https://socket.io/docs/v4/'
	},
	OpenAPI: {
		icon: <SiOpenapiinitiative />,
		url: 'https://spec.openapis.org/oas/latest.html'
	},
	RPC: {
		icon: <BiTransferAlt />,
		url: 'https://en.wikipedia.org/wiki/Remote_procedure_call'
	},
	JWT: { icon: <SiJsonwebtokens />, url: 'https://jwt.io/' },
	CRON: { icon: <FaClock />, url: 'https://en.wikipedia.org/wiki/Cron' },
	Nodemailer: { icon: <FaEnvelope />, url: 'https://nodemailer.com/' },
	'Discord.js': { icon: <SiDiscord />, url: 'https://discord.js.org/' },
	Discordx: { icon: <FaRobot />, url: 'https://discordx.js.org/' },
	DisTube: { icon: <FaRobot />, url: 'https://distube.js.org/' },
	'Dependency Injection': {
		icon: <TbCirclesRelation />,
		url: 'https://en.wikipedia.org/wiki/Dependency_injection'
	},
	FFmpeg: {
		icon: <SiFfmpeg />,
		url: 'https://ffmpeg.org/documentation.html'
	},
	ESM: {
		icon: <TbBoxMultiple />,
		url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules'
	},
	Linux: { icon: <SiLinux />, url: 'https://www.linux.org/' },
	Networking: {
		icon: <FaNetworkWired />,
		url: 'https://en.wikipedia.org/wiki/Computer_network'
	},
	Cloudflare: { icon: <SiCloudflare />, url: 'https://www.cloudflare.com/' },
	'Cloudflare Tunnel': {
		icon: <SiCloudflare />,
		url: 'https://developers.cloudflare.com/tunnel/'
	},
	'Proxmox VE': {
		icon: <SiProxmox />,
		url: 'https://pve.proxmox.com/pve-docs/'
	},
	LXC: {
		icon: <LuContainer />,
		url: 'https://linuxcontainers.org/lxc/introduction/'
	},
	'Port Forwarding': {
		icon: <TbRoute />,
		url: 'https://en.wikipedia.org/wiki/Port_forwarding'
	},
	Security: { icon: <FaShieldAlt />, url: 'https://owasp.org/' },
	Caddy: { icon: <SiCaddy />, url: 'https://caddyserver.com/' },
	VPN: {
		icon: <SiWireguard />,
		url: 'https://en.wikipedia.org/wiki/Virtual_private_network'
	},
	WireGuard: {
		icon: <SiWireguard />,
		url: 'https://www.wireguard.com/'
	},
	'RSS/Atom': {
		icon: <SiRss />,
		url: 'https://www.rssboard.org/rss-specification'
	},
	'System Monitoring': {
		icon: <MdMonitorHeart />,
		url: 'https://en.wikipedia.org/wiki/System_monitor'
	},
	HTML5: {
		icon: <FaHtml5 />,
		url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
	},
	CSS3: {
		icon: <DiCss3 />,
		url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
	},
	GraphQL: {
		icon: <SiGraphql />,
		url: 'https://graphql.org/'
	},
	'GitHub API': {
		icon: <BsGithub />,
		url: 'https://docs.github.com/en'
	},
	Markdown: {
		icon: <BsMarkdownFill />,
		url: 'https://www.markdownguide.org/'
	},
	Turborepo: {
		icon: <SiTurborepo />,
		url: 'https://turborepo.com/'
	},
	WebSockets: {
		icon: <BiPlug />,
		url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API'
	},
	'History API': {
		icon: <MdHistory />,
		url: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API'
	},
	'Fetch API': {
		icon: <TbApi />,
		url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
	},
	Go: {
		icon: <BiLogoGoLang />,
		url: 'https://go.dev/',
		linkDescription: 'Golang'
	}
} satisfies Record<string, SkillInfo>

export type SkillName = keyof typeof skillDataMap

export const hasSkillMetadata = (skillName: string): skillName is SkillName =>
	Object.hasOwn(skillDataMap, skillName)

const fallbackSkillData: SkillInfo = {
	icon: <FaCode />,
	url: null
}

export const getSkillData = (skillName: string): SkillInfo => {
	return hasSkillMetadata(skillName)
		? skillDataMap[skillName]
		: fallbackSkillData
}
