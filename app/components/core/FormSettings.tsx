import { myInfo } from 'app/utils/constans'
import type React from 'react'

export const FormSettings: React.FC = () => {
	const url =
		process.env.NODE_ENV === 'production'
			? myInfo.url
			: 'http://localhost:3000'

	return (
		<>
			<input type='hidden' name='_next' value={`${url}/thanks`} />
			<input type='hidden' name='_subject' value='New email!' />
			<input type='hidden' name='_blacklist' value='fuck, kurwa, bitch' />
			<input
				type='hidden'
				name='_autoresponse'
				value='I received your message and I will respond as fast as possible. Witold Zawada.'
			/>
			<input type='hidden' name='_template' value='box' />
		</>
	)
}
