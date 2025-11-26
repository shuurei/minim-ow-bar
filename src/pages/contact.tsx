import Head from 'next/head'
import { ContactForm } from '@/features/contact/components/contact-form'

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Minim'Ow Bar - Contact</title>
                <meta name='description' content="Minim'Ow Bar - Contact" />
            </Head>

            <div className='flex flex-col gap-4 max-w-4xl mx-auto'>
                <div className='flex flex-col gap-4 bg-primary-200 p-4'>
                    <p className='border-l-3 font-medium pl-2 border-primary-500 text-primary-500'>Pour toute information complémentaire et si vous n'avez pas trouvé votre bonheur dans notre FAQ, n'hésitez pas à prendre contact avec nous en remplissant le formulaire ci-dessous.</p>
                    <div className='flex flex-wrap gap-4 justify-between'>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-col border-l-3 pl-2 border-primary-500'>
                                <span className='font-semibold text-sm text-primary-900 uppercase'>Numéro de téléphone</span>
                                <a className='font-semibold text-primary-500' href='tel:0718253945'>07 18 25 39 45</a>
                            </div>
                            <div className='flex flex-col border-l-3 pl-2 border-primary-500'>
                                <span className='font-semibold text-sm text-primary-900 uppercase'>E-mail</span>
                                <a className='font-semibold text-primary-500' href='mailto:minimowbar@gmail.com'>minimowbar@gmail.com</a>
                            </div>
                        </div>
                        <div className='flex-1 max-w-4xl'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
