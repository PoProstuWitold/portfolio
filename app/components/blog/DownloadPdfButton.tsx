'use client'

import type { RefObject } from 'react'
import { FaFilePdf } from 'react-icons/fa'

interface DownloadPdfButtonProps {
	articleRef: RefObject<HTMLElement | null>
	slug: string
	title?: string
}

export function DownloadPdfButton({
	articleRef,
	slug,
	title
}: DownloadPdfButtonProps) {
	const pdfTitle = title || 'Blog post'
	const fileName = `${slug || 'post'}.pdf`

	const handleDownloadPdf = () => {
		if (typeof window === 'undefined') return
		if (!articleRef.current) return

		const articleClone = articleRef.current.cloneNode(true) as HTMLElement
		const copyButtons = articleClone.querySelectorAll(
			'button, [role="button"]'
		)
		copyButtons.forEach((button) => {
			const label = button.getAttribute('title') || ''
			const text = button.textContent || ''
			if (
				label.toLowerCase().includes('copy') ||
				text.toLowerCase().includes('copy')
			) {
				button.remove()
			}
		})
		articleClone
			.querySelectorAll(
				'.react-syntax-highlighter-line-number, .line-number'
			)
			.forEach((node) => {
				node.remove()
			})

		const styles = `
			<style>
				* { box-sizing: border-box; }
				:root { color-scheme: light; }
				body { font-family: ui-sans-serif, system-ui, sans-serif; color: #0f172a; padding: 32px; line-height: 1.7; }
				h1, h2, h3, h4 { line-height: 1.25; margin: 24px 0 12px; }
				h1 { font-size: 30px; margin-top: 0; }
				h2 { font-size: 22px; }
				h3 { font-size: 18px; }
				p { margin: 0 0 16px; }
				a { color: #2563eb; text-decoration: underline; }
				ul, ol { padding-left: 20px; margin: 0 0 16px; }
				blockquote { border-left: 4px solid #e2e8f0; padding: 8px 16px; margin: 16px 0; color: #475569; background: #f8fafc; }
				pre { background: #0f172a; color: #e2e8f0; padding: 16px; border-radius: 8px; overflow: auto; margin: 16px 0; }
				code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12px; }
				img { max-width: 100%; height: auto; border-radius: 8px; }
				table { width: 100%; border-collapse: collapse; margin: 16px 0; }
				th, td { border: 1px solid #e2e8f0; padding: 8px 10px; text-align: left; }
				th { background: #f8fafc; }
				.code-block button { display: none !important; }
				.react-syntax-highlighter-line-number, .line-number { display: none !important; }
				main h1 { break-after: avoid-page; page-break-after: avoid; }
				main h1 + * { break-inside: avoid-page; page-break-inside: avoid; }
				@page { margin: 16mm; }
			</style>
		`

		const html = `
			<!doctype html>
			<html lang="en">
				<head>
					<meta charset="utf-8" />
					<title>${fileName}</title>
					${styles}
				</head>
				<body>
					<main>
						<h1>${pdfTitle}</h1>
						${articleClone.innerHTML}
					</main>
				</body>
			</html>
		`

		const printFrame = document.createElement('iframe')
		printFrame.style.position = 'fixed'
		printFrame.style.right = '0'
		printFrame.style.bottom = '0'
		printFrame.style.width = '0'
		printFrame.style.height = '0'
		printFrame.style.border = '0'
		printFrame.srcdoc = html

		const cleanup = () => {
			if (printFrame.parentNode) {
				printFrame.parentNode.removeChild(printFrame)
			}
		}

		printFrame.onload = () => {
			const frameWindow = printFrame.contentWindow
			if (!frameWindow) {
				cleanup()
				return
			}

			frameWindow.document.title = fileName
			frameWindow.focus()
			frameWindow.print()
			window.setTimeout(cleanup, 500)
		}

		document.body.appendChild(printFrame)
	}

	return (
		<button
			type='button'
			onClick={handleDownloadPdf}
			className='btn btn-outline btn-md w-full flex-1 gap-2 rounded-xl font-semibold sm:btn-ghost sm:btn-square sm:btn-lg sm:w-auto sm:flex-none sm:rounded-lg md:p-4'
			aria-label='Download PDF'
			title={`Download ${fileName}`}
		>
			<FaFilePdf className='h-5 w-5 sm:h-7 sm:w-7' />
			<span className='sm:hidden text-lg'>PDF</span>
		</button>
	)
}
