import { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

import { HeaderLogo, HeaderNavList, HeaderMobileDrawer } from './index'

export default function Header() {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen((o) => !o);

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', open);
    }, [open]);

    return (
        <header className='sticky top-0 z-50'>
            <div className='flex justify-center bg-primary-900'>
                <div className='flex items-center justify-between p-4 w-full max-w-7xl'>
                    <HeaderLogo />

                    {/* Desktop Nav */}
                    <nav className='max-md:hidden'>
                        <HeaderNavList />
                    </nav>

                    <button
                        onClick={toggle}
                        className='text-white md:hidden'
                    >
                        <RxHamburgerMenu size={32} />
                    </button>
                </div>
            </div>

            {/* Drawer */}
            <HeaderMobileDrawer open={open} onClose={toggle} />
        </header>
    );
}
