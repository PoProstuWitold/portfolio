import React from 'react'

import Main from '@/sections/Main'
import About from '@/sections/About'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'
import { SEO } from '@/components/Seo'

const IndexPage: React.FC = () => {
	return (
		<>
			<SEO title="Witold Zawada" description="Developer portfolio Website of Witold Zawada (PoProstuWitold)"/>
			<Main />
			<About />
			<Projects />
			<Contact />
		</>
	)
}

export default IndexPage