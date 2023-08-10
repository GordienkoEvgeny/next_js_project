import Link from "next/link"
const Header = () => {
    return (
        <header className="container">
            <Link className="header_link" href="/">
                Home
            </Link>
            <Link className="header_link" href="/blog">
                Blog
            </Link>
            <Link className="header_link" href="/about">
                About
            </Link>
        </header>
    )
}
export { Header }