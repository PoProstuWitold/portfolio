import React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import Education from '../sections/Education'
import Main from '../sections/Main'

const IndexPage: React.FC<PageProps> = () => {

	return (
		<>
			<div className="text-3xl text-center">
				<Main />
				<About />
				<Projects />
				<Contact />
				<Education />
			</div>
		</>
	)
}

export default IndexPage

export const Head: HeadFC = () => <title>Witold Zawada</title>
