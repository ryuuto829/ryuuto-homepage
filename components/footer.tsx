import site from '../content/site'

export default function Footer() {
  return (
    <footer className="mt-14">
      <p className="py-8 flex space-x-1 text-[13px]">
        <span>&copy;</span>
        <time dateTime={site.builtTime.toISOString()}>
          {site.builtTime.getFullYear()}
        </time>
        <a href={site.url} rel="home" className="hover:underline">
          {site.author}
        </a>
      </p>
    </footer>
  )
}
