import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import { CodeProps } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import readingTime from 'reading-time'
import darkSyntax from 'react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark'
import { AiFillCopy, AiOutlineCheck, AiOutlineCopy } from 'react-icons/ai'

import { getFiles, getPost, IPost } from '@/content/blog-utils'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import { BlogInfo } from '@/content/BlogInfo'
import { Socials } from '@/components/Socials'
import Link from 'next/link'

export async function getStaticPaths() {
    const paths = await getFiles('src/content/posts')

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
    const { data, content } = await getPost(slug)

    return {
        props: {
            data,
            content,
            slug
        }
    }
}

interface PostPageProps {
    data: IPost['data']
    content: string,
    slug: string
}

const CodeBlock = (_props: CodeProps) => {
    const [visible, setVisible] = useState<boolean>(false)
    const [value, copy] = useCopyToClipboard()

    const { inline, className, children, ...props } = _props
    const match = /language-(\w+)/.exec(className || '')

    const copyAndConfirm = () => {
        copy((children as string))
        setVisible(true)

        setTimeout(() => {
            setVisible(false)
        }, 2000)
    }

    return !inline && match ? (
        <section className='relative'>
            <SyntaxHighlighter
                {...props}
                style={darkSyntax}
                language={match[1]}
                PreTag="div"
                customStyle={{
                    background: 'transparent',
                    lineHeight: 1,
                    padding: 0,
                    margin: 0,
                }}
                showInlineLineNumbers
                showLineNumbers
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
            <button className='absolute top-0 right-0 group' onClick={copyAndConfirm}>
                <AiOutlineCopy className='absolute top-0 right-0 transition-all group-hover:opacity-0 duration-300 ease-in-out w-5 h-5' />
                <AiFillCopy className='absolute top-0 right-0 transition-all opacity-0 group-hover:scale-125 group-hover:opacity-100 duration-300 hover:text-primary ease-in-out w-5 h-5 group-active:scale-75' />
                <span className={`bg-transparent absolute top-1 right-7 flex gap-2 transition-all ${value && visible ? 'opacity-100' : 'opacity-0'}`}>
                    <span>Copied</span><AiOutlineCheck />
                </span>
            </button>
        </section>
    ) : (
        <code {...props} className={className}>
            {children}
        </code>
    )
}

export default function PostPage({ data, content, slug }: PostPageProps) {
    const { text } = readingTime(content)

    return (
        <>
            <NextSeo
                title={data.title}
                description={data.description}
                canonical={`https://witoldzawada.dev/blog/${slug}`}
            />
            <main className='min-h-screen flex lg:flex-row flex-col justify-center gap-10'>
                <div className='lg:w-[50%] flex flex-col mt-20 lg:mt-48 mx-4 gap-14'>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><Link href={`/`}>Home</Link></li> 
                            <li><Link href={`/blog`}>Blog</Link></li> 
                            <li className='text-primary cursor-default'>{data.title}</li> 
                        </ul>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <BlogInfo data={data} readingTime={text} />
                        <div className='flex'>
                            <Socials size='big' />
                        </div>
                        <div className='prose'>
                            <h1>{data.title}</h1>
                        </div>
                    </div>
                    <div className='prose prose-pre:leading-none lg:max-w-[100ch] md:max-w-[90ch]'>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code: (props) => <CodeBlock {...props} />
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                </div>
                <div className='lg:w-[25%] py-14 lg:pt-48 p-5 lg:bg-base-300'>
                    <div className='sticky top-24'>
                        <div className='flex flex-row gap-4 items-center'>
                            <Image
                                className='min-h-32 min-w-32 rounded-full'
                                placeholder='blur'
                                blurDataURL={`/images/witold-512.png`}
                                src={`/images/witold-512.png`} alt="" width={128} height={128}
                            />
                            <div className="flex flex-col justify-stretch gap-2">
                                {data.authors.length >= 2 ?
                                    <>
                                        <p className="font-bold text-md">{`${data.authors.join(', ')}`}</p>
                                    </>
                                    :
                                    <>
                                        <p className="font-bold text-sm">{`${data.authors}`}</p>
                                    </>
                                }
                                <p className='text-xs text-justify'>
                                    Self-taugh Node.js web developer from Poland with passion for IT and new technologies. In free time also likes video games and history.
                                </p>
                                <span className='flex w-full justify-evenly bg-neutral text-neutral-content p-2 rounded-full'>
                                    <Socials size='small' />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}