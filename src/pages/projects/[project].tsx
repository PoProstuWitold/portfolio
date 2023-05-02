import { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import { graphql } from '@octokit/graphql'
import { AiFillGithub, AiOutlineStar } from 'react-icons/ai'
import { TbGitFork, TbLicense, TbLicenseOff } from 'react-icons/tb'


import { caseStudies, repoQuery, owner } from '@/utils/constans'
import { Repository } from '@/types' 

const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token ${process.env['NEXT_PUBLIC_GITHUB_AUTH_TOKEN']}`,
    }
})

export default function Project({ repository }: { repository: Repository }): ReactElement {

    return (
        <>
            <NextSeo 
				title={`${repository.owner.login}/${repository.name}`}
				description={`${repository.description}`}
                canonical={`https://witoldzawada.dev/projects/${repository.name}`}
			/>
            <section className='min-h-screen flex flex-col gap-16'>
                <br />
                <br />
                <div className="flex flex-col lg:flex-row justify-start mx-6 lg:mx-20 gap-6">
                    <div className="flex flex-col flex-grow lg:w-[50%] lg:mr-10 gap-8 bg-base-200 p-5 rounded-2xl shadow-xl">
                        <div className='flex flex-col gap-3'>
                            <div className='flex flex-col md:flex-row gap-3 md:items-center'>
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
                                    <AiFillGithub className="w-10 h-10" />
                                </a>
                            </div>
                            <p>
                                {repository.description}
                            </p>
                        </div>
                        <div className="flex flex-col max-w-[85%] gap-3">
                            
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow lg:w-[50%] mx-0 gap-8 bg-base-200 p-5 rounded-2xl shadow-xl">
                        <div className="flex flex-col gap-3">
                            <h3 className='text-2xl font-bold'>Stats</h3>
                            <div className='flex lg:flex-row justify-between text-lg flex-col gap-4'>
                                <span className='flex items-center text-center gap-2'>{repository.licenseInfo && <><TbLicense/> {` ${repository.licenseInfo.name}`}</> || <><TbLicenseOff/>{' No licence'}</>}</span>
                                <span className='flex items-center text-center gap-2'><AiOutlineStar className='w-5 h-5'/><p>{repository.stargazers.totalCount} stars</p></span>
                                <span className='flex items-center text-center gap-2'><TbGitFork /><p>{repository.forks.totalCount} forks</p></span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className='text-2xl font-bold'>Languages</h3>
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
                                {!repository.languages.nodes.length && 'No languages, huh? Maybe you got my README?'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-justify mx-6 lg:mx-20 gap-6 mb-20 bg-base-200 p-5 rounded-2xl shadow-md">
                    <h2 className="text-3xl font-bold text-left">
                        Case study
                    </h2>
                    <p>
                        {caseStudies.get(repository.name) || 'Congrats! You found easter egg!'}
                    </p>
                </div>
            </section>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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