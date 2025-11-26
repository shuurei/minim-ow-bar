import { AppProps } from 'next/app'

import '@/globals.css'

import Header from '@/components/layout/header/base'
import Footer from '@/components/layout/footer'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Header />
			<main className='flex justify-center flex-1 px-2 py-4 *:w-full *:max-w-7xl'>
	    		<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}
