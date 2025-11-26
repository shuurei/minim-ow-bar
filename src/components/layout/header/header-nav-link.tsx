import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

export interface NavLinkProps extends ComponentProps<typeof Link> {
    label: string;
    href: string;
}

export default function HeaderNavLink({ label, href, className, ...props }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(href + '/');

    return (
        <Link
            href={href}
            className={`
                ${className ?? ''}
                ${isActive ? 'active' : ''}
            `}
            {...props}
        >
            {label}
        </Link>
    );
}
