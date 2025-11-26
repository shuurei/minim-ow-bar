import Head from 'next/head'

import { KITTENS_DATA } from '@/features/kittens/data/kittens'
import { KittenCard } from '@/features/kittens/components/kitten-card'

export default function KittensPage() {
    return (
        <>
            <Head>
                <title>Minim'Ow Bar - Les Chatons</title>
                <meta name='description' content="Minim'Ow Bar - Les Chatons" />
            </Head>

            <div className='flex flex-col gap-4 max-w-4xl mx-auto'>
                {KITTENS_DATA.map((props, idx) => (
                    <KittenCard key={idx} {...props} />
                ))}
            </div>
        </>
    );
}
