import { useState } from 'react'
import { AiFillCopy, AiOutlineCheck, AiOutlineCopy } from 'react-icons/ai'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import darkSyntax from 'react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark'
import useCopyToClipboard from '@/hooks/useCopyToClipboard'

// biome-ignore lint: Irrelevant
export const CodeBlock = (_props: any) => {
	const [visible, setVisible] = useState(false)
	const [_value, copy] = useCopyToClipboard()
	const { inline, className, children, ...props } = _props
	const match = /language-(\w+)/.exec(className || '')

	const copyAndConfirm = () => {
		copy(children as string)
		setVisible(true)
		setTimeout(() => setVisible(false), 2000)
	}

	return !inline && match ? (
		<section className='relative code-block'>
			<div className='flex items-center justify-between text-slate-400 text-xs font-mono px-4 py-3 border-b border-white/10'>
				<span>{match[1]}</span>
				<button
					className='cursor-pointer text-slate-400 hover:text-white transition-colors flex items-center gap-1 group'
					onClick={copyAndConfirm}
					title='Copy code'
					type='button'
				>
					{visible ? (
						<>
							<AiOutlineCheck className='w-4 h-4 text-green-400' />
							<span className='text-green-400'>Copied!</span>
						</>
					) : (
						<>
							<AiOutlineCopy className='w-4 h-4 block group-hover:hidden' />
							<AiFillCopy className='w-4 h-4 hidden group-hover:block' />
							<span>Copy</span>
						</>
					)}
				</button>
			</div>
			<div className='p-2'>
				<SyntaxHighlighter
					{...props}
					style={darkSyntax}
					language={match[1]}
					PreTag='div'
					customStyle={{
						background: 'transparent',
						lineHeight: 1,
						padding: 0,
						margin: 0
					}}
					showInlineLineNumbers
					showLineNumbers
				>
					{String(children).replace(/\n$/, '')}
				</SyntaxHighlighter>
			</div>
		</section>
	) : (
		<code {...props} className={`${className} code-block`}>
			{children}
		</code>
	)
}
