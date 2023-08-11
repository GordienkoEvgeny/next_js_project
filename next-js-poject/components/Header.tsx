import { Navigation } from "./Navigation"
const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" }
]

const Header = () => {
    return (
        <header className="container">
            <Navigation navlinks={navItems} />
        </header>
    )
}
export { Header }