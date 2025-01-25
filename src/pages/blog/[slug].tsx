import ReactMarkdown from 'react-markdown'
import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import remarkGfm from 'remark-gfm'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import readingTime from 'reading-time'
import darkSyntax from 'react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark'
import { AiFillCopy, AiOutlineCheck, AiOutlineCopy } from 'react-icons/ai'
import Link from 'next/link'
import { RWebShare } from 'react-web-share'

import { getFiles, getPost, IPost } from '@/content/blog-utils'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import { BlogInfo } from '@/content/BlogInfo'
import { Socials } from '@/components/Socials'

// import Witold from '../../../public/images/witold-512.png'
import { shimmer, toBase64 } from '@/utils/functions'

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CodeBlock = (_props: any) => {
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
            <button className='absolute top-0 right-0 group cursor-pointer' onClick={copyAndConfirm}>
                <AiOutlineCopy className='absolute top-0 right-0 transition-all group-hover:opacity-0 duration-300 ease-in-out w-5 h-5' />
                <AiFillCopy className='absolute top-0 right-0 transition-all opacity-0 group-hover:scale-125 group-hover:opacity-100 duration-300 hover:text-primary ease-in-out w-5 h-5 group-active:scale-75' />
                <span className={`absolute top-1 right-7 flex gap-2 transition-all px-2 bg-neutral opacity-0 ${value && visible ? 'opacity-100' : ''}`}>
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

// react-markdown package is very loosely typed, so it's hard getting right type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ParagraphBlock = ({ paragraph }: { paragraph: any }) => {
    const { node } = paragraph

    if (node.children[0].tagName === "img") {
        const image = node.children[0]
        const metastring = image.properties.alt
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
        const metaWidth = metastring.match(/{([^}]+)x/)
        const metaHeight = metastring.match(/x([^}]+)}/)
        const width = metaWidth ? metaWidth[1] : "768"
        const height = metaHeight ? metaHeight[1] : "432"
        const isPriority = metastring?.toLowerCase().match('{priority}')
        const hasCaption = metastring?.toLowerCase().includes('{caption:')
        const caption = metastring?.match(/{caption: (.*?)}/)?.pop()
        const hasUrl = metastring?.toLowerCase().includes('{url:')
        const url = metastring?.match(/{url: (.*?)}/)?.pop()
        return (
            <div className='flex flex-col'>
                <Image
                    src={image.properties.src}
                    width={width}
                    height={height}
                    className="mb-0 mt-0 p-0 rounded-t-2xl"
                    alt={alt}
                    priority={isPriority}
                    placeholder='blur'
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 300))}`}
                    style={{
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                {hasCaption ?
                    <div className="font-bold px-5 py-3 mb-10 bg-neutral text-neutral-content italic rounded-b-2xl" aria-label={caption}>
                        {hasUrl ? <a rel="noreferrer" target='_blank' className='font-bold text-neutral-content' href={url}>{caption}</a> : caption}
                    </div>
                    : null}
            </div>
        )
    }
    return <p>{paragraph.children}</p>
}

export default function PostPage({ data, content, slug }: PostPageProps) {
    const { text } = readingTime(content)
	const url = typeof window !== 'undefined' ? window.location.href : ''

    return (
        <>
            <NextSeo
                title={`Blog | ${data.title}`}
                description={data.description}
                canonical={`https://witoldzawada.dev/blog/${slug}`}
            />
            <main className='min-h-screen flex lg:flex-row flex-col justify-center gap-10'>
                <div className='lg:w-[50%] flex flex-col md:my-28 my-24 mx-4 gap-10'>
                    <div className="md:text-sm text-xs breadcrumbs">
                        <ul>
                            <li><Link href={`/`}>Home</Link></li>
                            <li><Link href={`/blog`}>Blog</Link></li>
                            <li className='text-primary cursor-default font-semibold'>{data.title}</li>
                        </ul>
                    </div>
                    <div className='flex flex-col w-full lg:flex-row'>
						<div className="grid h-24 flex-grow bg-base-300 rounded-box place-items-center">
                        	<BlogInfo data={data} readingTime={text}/>
						</div>
						<div className="divider lg:divider-horizontal"></div>
						<div className="grid h-16 lg:h-24 flex-grow bg-base-300 rounded-box place-items-center">
                        	<Socials size='big' />
						</div>
                    </div>
					<div className='flex flex-col gap-2'>
						<span className='font-semibold'>tags:</span>
						<div className="flex gap-2 flex-wrap">
							{data.tags.map((tag) => (
								<span
									key={tag}
									className={`bg-secondary text-neutral-content font-semibold px-3 py-1 rounded-md`}
								>
									{tag}
								</span>
							))}
						</div>
					</div>
					<RWebShare
						data={{
							text: data.description,
							url,
							title: `Blog | ${data.title}`
						}}
						sites={[
							'facebook', 'twitter', 'linkedin', 'reddit', 'whatsapp', 'copy', 'mail'
						]}
						// disableNative
						onClick={() => console.log('shared successfully!')}
					>
						<button className='btn btn-outline'>Share this article 🔗</button>
					</RWebShare>
                    <div className='prose prose-pre:leading-none lg:max-w-[100ch] md:max-w-[90ch]'>
                        <h1 className='m-0 p-0'>{data.title}</h1>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                code: (props) => <CodeBlock {...props} />,
                                // img: image => <ImageBlock image={image} />
                                p: paragraph => <ParagraphBlock paragraph={paragraph} />
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                </div>
                {/* <div className='lg:w-[25%] py-14 lg:pt-48 p-5 lg:bg-base-300'>
                    <div className='sticky top-24'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row items-center'>
                                <Image
                                    priority
                                    className='rounded-full'
                                    placeholder='blur'
                                    style={{
                                        maxWidth: '128px',
                                        height: '128px',
                                    }}
                                    src={Witold} alt="Witold Zawada"
                                />
                            </div>
                            <div className='flex flex-row items-center w-full md:justify-between'>
                                {data.authors.length >= 2 ?
                                    <p className="font-bold text-xl">{`${data.authors.join(', ')}`}</p>
                                    :
                                    <p className="font-bold text-xl">{`${data.authors}`}</p>
                                }
                                <div className='divider divider-horizontal'></div>
                                <span className='flex'>
                                    <Socials size='small' />
                                </span>
                            </div>
                            <div className="flex flex-col justify-stretch gap-2">
                                <p className='text-sm text-justify'>
                                    I&apos;m a self-taught Node.js web developer from Poland with a strong interest in IT and new technologies. In my spare time, I enjoy playing video games and learning about history.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}

            </main>
        </>
    )
}