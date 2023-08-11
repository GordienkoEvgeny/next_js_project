'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

type NavLink = {
    label: string
    href: string
}

type Props = {
    navlinks: NavLink[]
}

export const Navigation = ({navlinks}: Props) => {
    const pathname = usePathname()  // читает путь к текущему URL
    return (
        <>
            {navlinks.map((link) => {
                const isActive = pathname === link.href
                return (
                <>
                <Link 
                    href={link.href}
                    key={link.label}
                    className={isActive ?  "header_link_active" : "header_link"}
                    >
                    {link.label}
                </Link>
                </>)
            })}
        </>
    )
} 