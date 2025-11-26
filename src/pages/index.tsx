import Head from 'next/head'

import { HOME_SECTIONS_DATA } from '@/features/home/data/home-sections'
import { SectionCard } from '@/features/home/components/section-card'

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Minim'Ow Bar</title>
                <meta name='description' content="Minim'Ow Bar" />
            </Head>

            <div className='flex flex-col gap-4 max-w-4xl mx-auto'>
                {HOME_SECTIONS_DATA.map((props, idx) => (
                    <SectionCard key={idx} {...props} />
                ))}
            </div>
        </>
    );
}
