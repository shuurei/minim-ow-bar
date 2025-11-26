import { IoIosClose } from 'react-icons/io'
import NavList from './header-nav-list'

interface HeaderMobileDrawerProps {
    open: boolean;
    onClose: () => void;
}

export default function HeaderMobileDrawer({ open, onClose }: HeaderMobileDrawerProps) {
    return (
        <>
            <div
                onClick={onClose}
                className={`
                    fixed inset-0 bg-black/25 backdrop-blur-xs z-40
                    transition-opacity duration-300
                    ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                `}
            />

            <div
                className={`
                    fixed top-0 right-0 h-full w-64 bg-primary-700 p-4 z-50
                    flex flex-col gap-4 border-l border-primary-500
                    transition-transform duration-300
                    ${open ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className='flex items-center justify-between text-primary-200 border-b pb-2'>
                    <h3 className='font-bold text-2xl'>Navigation</h3>
                    <button className='font-extrabold' onClick={onClose}>
                        <IoIosClose size={32} />
                    </button>
                </div>

                <NavList onClick={onClose} />
            </div>
        </>
    );
}
