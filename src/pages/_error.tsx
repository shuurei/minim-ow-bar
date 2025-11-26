import Head from 'next/head'
import Link from 'next/link'

export default function ErrorPage() {
    return (
        <>
            <Head>
                <title>Minim'Ow Bar - 404</title>
                <meta name='description' content="Minim'Ow Bar - 404" />
            </Head>

            <div className='flex flex-col gap-4 max-w-4xl mx-auto'>
                <div className='flex flex-col gap-2 items-center justify-center bg-primary-200 px-4 py-2 shadow-block shadow-primary-300 rounded'>
                    <h1 className='text-primary-800 font-semibold text-center'>Chapristi, où es-tu allé pour te perdre ? 😹</h1>
                    <Link
                        href='/'
                        className='bg-primary-100 text-primary-800 font-semibold px-4 py-2 uppercase border-2 border-primary-800 hover:bg-primary-800 hover:text-primary-100 transition duration-75'
                    >Revenir à l'accueil</Link>
                </div>
            </div>
        </>
    );
}
