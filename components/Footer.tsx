import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
// import SocialIcon from '@/components/social-icons'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <footer className="b py-8 mt-8 text-white">
      <div className="container mx-auto flex flex-col items-center">
        <div className="mb-8 flex space-x-4">
          <SocialIcon className='border rounded-full border-gray-600' network="email" url={siteMetadata.email} />
          <SocialIcon className='border rounded-full border-gray-600' network="github" url={siteMetadata.github} />
          <SocialIcon network="x" url={siteMetadata.twitter}/>
          <SocialIcon network="linkedin" url={siteMetadata.linkedin}/>
        </div>
        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          <p>
            {siteMetadata.title} &copy; {new Date().getFullYear()}
          </p>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <p className="flex items-center">
           Made with <img className="w-4 h-4 mx-1" src="/static/images/heart.svg"/>for you
          </p>
        </div>
      </div>
    </footer>
  )
}
