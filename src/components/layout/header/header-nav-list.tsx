import NavLink from './header-nav-link'

export const NAV_LINKS = [
    { label: 'Accueil', href: '/' },
    { label: 'Les chatons', href: '/kittens' },
    { label: 'Réservations', href: '/reservation' },
    { label: 'La carte', href: '/menu' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
];

export default function HeaderNavList({ onClick }: { onClick?: () => void }) {
    return (
        <ul className='flex flex-col md:flex-row gap-3'>
            {NAV_LINKS.map((link) => (
                <NavLink
                    key={link.href}
                    onClick={onClick}
                    className='max-md:pl-2 text-white font-bold capitalize [a.active]:text-primary-300 md:underline-slide max-md:[&.active]:border-l-2'
                    {...link}
                />
            ))}
        </ul>
    );
}
