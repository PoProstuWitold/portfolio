'use client'

import { useEffect, useRef, useState } from 'react'
import { AiFillCopy, AiOutlineCheck, AiOutlineCopy } from 'react-icons/ai'

interface CopyCodeButtonProps {
	code: string
}

export function CopyCodeButton({ code }: CopyCodeButtonProps) {
	const [isCopied, setIsCopied] = useState(false)
	const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

	useEffect(() => {
		return () => {
			if (resetTimer.current) {
				clearTimeout(resetTimer.current)
			}
		}
	}, [])

	const copyAndConfirm = async () => {
		try {
			await navigator.clipboard.writeText(code)
		} catch {
			return
		}

		setIsCopied(true)

		if (resetTimer.current) {
			clearTimeout(resetTimer.current)
		}

		resetTimer.current = setTimeout(() => setIsCopied(false), 2000)
	}

	return (
		<button
			className='cursor-pointer text-slate-400 hover:text-white transition-colors flex items-center gap-1 group'
			onClick={copyAndConfirm}
			title='Copy code'
			type='button'
		>
			{isCopied ? (
				<>
					<AiOutlineCheck
						aria-hidden='true'
						className='w-4 h-4 text-green-400'
					/>
					<span className='text-green-400'>Copied!</span>
				</>
			) : (
				<>
					<AiOutlineCopy
						aria-hidden='true'
						className='w-4 h-4 block group-hover:hidden'
					/>
					<AiFillCopy
						aria-hidden='true'
						className='w-4 h-4 hidden group-hover:block'
					/>
					<span>Copy</span>
				</>
			)}
		</button>
	)
}
