import { type ComponentProps, isValidElement } from 'react'
import type { ExtraProps } from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import darkSyntax from 'react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark'
import { CopyCodeButton } from './CopyCodeButton'

type CodeBlockProps = ComponentProps<'code'> & ExtraProps
type PreBlockProps = ComponentProps<'pre'> & ExtraProps

export function PreBlock({ children, node: _node, ...props }: PreBlockProps) {
	const languageClassName = isValidElement<{ className?: string }>(children)
		? children.props.className
		: undefined

	if (languageClassName?.includes('language-')) {
		return children
	}

	return <pre {...props}>{children}</pre>
}

export const CodeBlock = ({
	node: _node,
	className,
	children,
	...props
}: CodeBlockProps) => {
	const match = /language-([\w-]+)/.exec(className || '')
	const code = String(children).replace(/\n$/, '')

	return match ? (
		<div className='not-prose relative my-6 overflow-x-auto rounded-md bg-slate-800 px-4 py-3 text-sm leading-6 text-slate-200 code-block'>
			<div className='flex items-center justify-between text-slate-400 text-xs font-mono px-4 py-3 border-b border-white/10'>
				<span>{match[1]}</span>
				<CopyCodeButton code={code} />
			</div>
			<div className='p-2'>
				<SyntaxHighlighter
					style={darkSyntax}
					language={match[1]}
					PreTag='pre'
					customStyle={{
						background: 'transparent',
						lineHeight: 1,
						padding: 0,
						margin: 0
					}}
					showInlineLineNumbers
					showLineNumbers
				>
					{code}
				</SyntaxHighlighter>
			</div>
		</div>
	) : (
		<code
			{...props}
			className={className ? `${className} code-block` : 'code-block'}
		>
			{children}
		</code>
	)
}
