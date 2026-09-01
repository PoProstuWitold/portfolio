'use client'

import { useEffect } from 'react'

interface PostHashResetProps {
	elementId: string
}

export function PostHashReset({ elementId }: PostHashResetProps) {
	useEffect(() => {
		const element = document.getElementById(elementId)

		if (!element) {
			return
		}

		const observer = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting && window.location.hash) {
				window.history.replaceState(null, '', window.location.pathname)
			}
		})

		observer.observe(element)
		return () => observer.disconnect()
	}, [elementId])

	return null
}
