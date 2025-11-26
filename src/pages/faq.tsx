import Head from 'next/head'

import { QUESTIONS_DATA } from '@/features/faq/data/questions'
import { Dropdown } from '@/features/faq/components/dropdown'

export default function FAQPage() {
    return (
        <>
            <Head>
                <title>Minim'Ow Bar - F.A.Q</title>
                <meta name='description' content="Minim'Ow Bar - F.A.Q" />
            </Head>

            <div className='flex flex-col gap-4 max-w-4xl mx-auto'>
                {QUESTIONS_DATA.map((props, idx) => (
                    <Dropdown key={idx} {...props} />
                ))}
            </div>
        </>
    );
}
