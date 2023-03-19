import { NextSeo } from 'next-seo'
import { graphql } from '@octokit/graphql'
import { AiOutlineStar } from 'react-icons/ai'
import { TbGitFork } from 'react-icons/tb'


import { caseStudies, repoQuery, owner } from '@/utils/constans'
import { Repository } from '@/types' 

const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token ${process.env['NEXT_PUBLIC_GITHUB_AUTH_TOKEN']}`,
    }
})

export default function Project({ repository }: { repository: Repository }) {

    return (
        <>
            <NextSeo 
				title={`${repository.name}`}
				description={`${repository.description}`}
                canonical={`https://witoldzawada.dev/projects/${repository.name}`}
			/>
            <section className='min-h-screen flex flex-col gap-20'>
                <br />
                <br />
                <div className="flex flex-col lg:flex-row justify-start mx-6 lg:mx-20 gap-6">
                    <div className="flex flex-col flex-grow lg:max-w-[50%] lg:mr-10 gap-8">
                        <div className='flex flex-col gap-3'>
                            <h2 className="text-3xl font-bold text-left">
                                {repository.name}
                            </h2>
                            <a 
                                className='link'
                                target="_blank"
							    rel="noreferrer"
                                title={`${repository.name} GitHub link`}
                                href={`https://github.com/${repository.owner.login}/${repository.name}`}
                            >
                                {`https://github.com/${repository.owner.login}/${repository.name}`}
                            </a>
                            <p>
                                {repository.description}
                            </p>
                        </div>
                        <div className="flex flex-col max-w-[85%] gap-3">
                            
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow lg:max-w-[50%] mx-0 gap-8">
                        <div className="flex flex-col max-w-[85%] gap-3">
                            <h3 className='text-2xl'>Stats</h3>
                            <div className='flex flex-row justify-between text-lg'>
                                <p>{repository.licenseInfo.name}</p>
                                <span className='flex items-center text-center'><AiOutlineStar className='w-5 h-5'/><p>{repository.stargazers.totalCount} stars</p></span>
                                <span className='flex items-center text-center'><TbGitFork /><p>{repository.forks.totalCount} forks</p></span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className='text-2xl'>Languages</h3>
                            <div className='flex flex-row gap-2 flex-wrap'>
                                {repository.languages.nodes.map((lang) => {
                                    return (
                                        <span 
                                            className={`p-1 max-w-fit border-4 font-bold border-transparent`} 
                                            key={`${repository.name}:${lang.name}`}
                                            style={{ 
                                                borderBottomColor: `${lang.color}`,
                                            }} 
                                        >
                                            {lang.name}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mx-6 lg:mx-20 mb-40">
                    <h2 className="text-3xl font-bold text-left">
                        Case study
                    </h2>
                    <p>
                        {caseStudies.get(repository.name)}
                    </p>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps(context: any) {
    const { project } = context.query

    try {
        const repository: Repository = await graphqlWithAuth(repoQuery, {
            repo: `${project}`,
            owner,
        })

        return {
            props: repository
        }
    } catch (err) {
        console.error(err)
        return {
            notFound: true
        }
    }
}