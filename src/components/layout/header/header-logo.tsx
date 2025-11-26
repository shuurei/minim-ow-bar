import Image from 'next/image'

export default function HeaderLogo() {
    return (
        <div className='flex items-center gap-3 pointer-events-none'>
            <Image src={process.env.NODE_ENV === 'production' ? '/minim-ow-bar/logo.png' :  '/logo.png'} alt='logo' width={48} height={48} />
            <h1 className='text-white font-extrabold text-lg'>Minim'Ow Bar</h1>
        </div>
    );
}
