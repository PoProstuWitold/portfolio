import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

import Main from '../sections/Main'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

const IndexPage: React.FC<PageProps> = () => {
	return (
		<>
			<div className="text-3xl text-center">
				<Main />
				<About />
				<Projects />
				<Contact />
			</div>
		</>
	)
}

export default IndexPage

export const Head: HeadFC = () => (
	<>
		<title>Witold Zawada</title>
		<meta
			name="description"
			content="Hello, I'm Witold Zawada. Beginner TypeScript developer"
		/>
	</>
)
