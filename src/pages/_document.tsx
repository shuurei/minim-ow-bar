import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='fr'>
            <Head />
            <link rel='icon' href={process.env.NODE_ENV === 'production' ? '/minim-ow-bar/icon.png' : '/icon.png'} type='image/png' />
            <body className='relative bg-primary-100'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
