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