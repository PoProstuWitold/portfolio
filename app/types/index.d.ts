export interface Repository {
	name: string
	description: string
	owner: {
		login: string
	}
	licenseInfo: {
		name: string
	}
	forks: {
		totalCount: number
	}
	stargazers: {
		totalCount: number
	}
	languages: {
		nodes: LanguageNode[]
	}
}

export interface LanguageNode {
	name: string
	color: string
}

export interface ProjectDocument {
	name: string
	formattedName: string
	description: string
	type: string
	skills: string[]
	repo: string
	badges: Array<
		| 'featured'
		| 'new'
		| 'inProgress'
		| 'deprecated'
		| 'collaboration'
		| 'personal'
		| 'docs'
		| 'selfhosted'
		| 'education'
	>
}
