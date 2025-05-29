import type { JSX } from 'react'
import { BiLogoMongodb, BiLogoPostgresql, BiTransferAlt } from 'react-icons/bi'
import { DiRedis } from 'react-icons/di'
import {
	SiCaddy,
	SiCloudflare,
	SiDiscord,
	SiDocker,
	SiHono,
	SiJavascript,
	SiJsonwebtokens,
	SiLinux,
	SiMongodb,
	SiNestjs,
	SiNextdotjs,
	SiReact,
	SiTailwindcss,
	SiTypescript,
	SiWireguard
} from 'react-icons/si'

import {
	FaClock,
	FaCode,
	FaEnvelope,
	FaNetworkWired,
	FaNodeJs,
	FaRobot,
	FaShieldAlt
} from 'react-icons/fa'
import { TbBoxMultiple, TbRoute } from 'react-icons/tb'

type SkillInfo = {
	icon: JSX.Element
	url: string
}

const skillDataMap: Record<string, SkillInfo> = {
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
	TailwindCSS: { icon: <SiTailwindcss />, url: 'https://tailwindcss.com/' },
	Hono: { icon: <SiHono />, url: 'https://hono.dev/' },
	RPC: {
		icon: <BiTransferAlt />,
		url: 'https://en.wikipedia.org/wiki/Remote_procedure_call'
	},
	JWT: { icon: <SiJsonwebtokens />, url: 'https://jwt.io/' },
	CRON: { icon: <FaClock />, url: 'https://en.wikipedia.org/wiki/Cron' },
	Nodemailer: { icon: <FaEnvelope />, url: 'https://nodemailer.com/' },
	'Discord.js': { icon: <SiDiscord />, url: 'https://discord.js.org/' },
	Discordx: { icon: <FaRobot />, url: 'https://discordx.js.org/' },
	Distube: { icon: <FaRobot />, url: 'https://distube.js.org/' },
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
	'Port Forwarding': {
		icon: <TbRoute />,
		url: 'https://en.wikipedia.org/wiki/Port_forwarding'
	},
	Security: { icon: <FaShieldAlt />, url: 'https://owasp.org/' },
	Caddy: { icon: <SiCaddy />, url: 'https://caddyserver.com/' },
	VPN: {
		icon: <SiWireguard />,
		url: 'https://en.wikipedia.org/wiki/Virtual_private_network'
	}
}

export const getSkillData = (skillName: string): SkillInfo => {
	return (
		skillDataMap[skillName] ?? {
			icon: <FaCode />,
			url: 'https://github.com/PoProstuWitold'
		}
	)
}
