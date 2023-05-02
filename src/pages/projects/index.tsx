import { NextSeo } from 'next-seo'

import Main from '@/sections/Main'
import About from '@/sections/About'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'

const ProjectsPage: React.FC = () => {
	return (
		<>
			<NextSeo 
				title={`Witold Zawada`}
				description={`Developer portfolio Website of Witold Zawada (PoProstuWitold)`}
			/>
			<Main />
			<About />
			<Projects />
			<Contact />
		</>
	)
}

export default ProjectsPage