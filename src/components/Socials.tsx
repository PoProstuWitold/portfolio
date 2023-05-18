import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

interface SocialsProps {
    size: "small" | "big"
    text?: boolean
}

export const Socials: React.FC<SocialsProps> = ({
    size, text
}) => {
    
    return (
        <>
            <div className="flex">
				<a
					href="https://github.com/PoProstuWitold"
					target="_blank"
					rel="noreferrer"
					className="flex flex-row group"
                    title='My GitHub Profile'
				>
				    <div className="flex flex-col items-center mr-2">
						<AiFillGithub 
                            className={`transition-all group-active:scale-90 group-hover:scale-125 duration-300 group-hover:text-primary ease-in-out ${size === "big" ? 'w-10 h-10' : 'w-8 h-8'}`}
                        />
                        {text &&
                            <span className="transition-all duration-300 group-hover:text-primary ease-in-out self-center mx-auto mt-1 text-xs font-semibold">
                                GitHub
                            </span>
                        }
				    </div>
				</a>
			</div>
			<div className="flex">
				<a
					href="https://www.linkedin.com/in/witoldzawada/"
					target="_blank"
					rel="noreferrer"
					className="flex flex-row group"
                    title='My Linkedin Profile'
				>
				    <div className="flex flex-col items-center mx-2">
						<AiFillLinkedin 
                            className={`transition-all group-active:scale-90 group-hover:scale-125 duration-300 group-hover:text-primary ease-in-out ${size === "big" ? 'w-10 h-10' : 'w-8 h-8'}`} 
                        />
                        {text &&
                            <span className="transition-all duration-300 group-hover:text-primary ease-in-out self-center mx-auto mt-1 text-xs font-semibold">
                                Linkedin
                            </span>
                        }
				    </div>
				</a>
			</div>	
			<div className="flex">
				<a
					href="https://discord.com/users/460167435471945748"
					target="_blank"
					rel="noreferrer"
					className="flex flex-row group"
                    title='My Discord Profile'
				>
				    <div className="flex flex-col items-center mx-2">
						<FaDiscord 
                            className={`transition-all group-active:scale-90 group-hover:scale-125 duration-300 group-hover:text-primary ease-in-out ${size === "big" ? 'w-10 h-10' : 'w-8 h-8'}`}
                        />
                        {text &&
                            <span className="transition-all duration-300 group-hover:text-primary ease-in-out self-center mx-auto mt-1 text-xs font-semibold">
                                Discord
                            </span>
                        }
					</div>
				</a>
			</div>
        </>
    )
}