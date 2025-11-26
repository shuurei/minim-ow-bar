import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'

import PDF_IMAGES from '@/features/menu/assets/menu'

export default function MenuPage() {
    const [page, setPage] = useState(0);

    const MAX_PAGE = PDF_IMAGES.length;

    const handleNextPage = () => {
        if ((page + 1) < MAX_PAGE) setPage(prev => prev += 1)
    };

    const handlePreviousPage = () => {
        if (page > 0) setPage(prev => prev -= 1)
    };

    return (
        <>
            <Head>
                <title>Minim'Ow Bar - La Carte</title>
                <meta name='description' content="Minim'Ow Bar - La Carte" />
            </Head>

            <div className='flex flex-col gap-4 max-w-4xl mx-auto'>
                <div className='flex flex-col justify-center items-center gap-4 bg-primary-200 p-4'>
                    <div className='flex flex-col gap-4'>
                        <a
                            href={process.env.NODE_ENV === 'production' ? '/minim-ow-bar/pdf/menu.pdf' : '/pdf/menu.pdf'}
                            download="Minim'Ow Bar - Carte du Bar à chats"
                            className='text-center border-2 text-[#064e3b] text-sm px-1.5 py-2 font-semibold bg-[#6ee7b7] border-[#064e3b] uppercase hover:bg-[#064e3b] hover:text-[#6ee7b7] transition duration-75'
                        >Télécharger le menu</a>
                        <div className='flex items-center gap-2'>
                            <button className='border-2 text-primary-900 text-sm px-1.5 py-2 font-semibold bg-primary-300 border-primary-900 uppercase hover:bg-primary-900 hover:text-primary-300 transition duration-75' onClick={handlePreviousPage}>Retour</button>
                            <span className='text-primary-900'>{page + 1} / {MAX_PAGE}</span>
                            <button className='border-2 text-primary-900 text-sm px-1.5 py-2 font-semibold bg-primary-300 border-primary-900 uppercase hover:bg-primary-900 hover:text-primary-300 transition duration-75' onClick={handleNextPage}>Suivant</button>
                        </div>
                    </div>

                    <Image
                        className='w-full md:w-3/4 lg:w-2/4 shadow-block border-2 p-4 bg-primary-300 border-primary-300 shadow-primary-400 rounded'
                        src={PDF_IMAGES[page]}
                        alt='menu'
                    />
                </div>
            </div>
        </>
    );
}
