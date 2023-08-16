import { GitHubLogoIcon } from '@radix-ui/react-icons'
import site from '../content/site'

export default function Header() {
  return (
    <header className="mt-8 mb-14 flex items-center justify-between">
      <a
        href={site.url}
        rel="home"
        className="text-xl font-medium tracking-thick tracking-tight"
      >
        {site.title}
      </a>
      <a href={site.repoURL}>
        <GitHubLogoIcon className="h-6 w-6" />
      </a>
    </header>
  )
}
