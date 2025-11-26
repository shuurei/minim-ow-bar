import Head from 'next/head'
import { ReservationContent } from '@/features/reservation/components/reservation-content'

export default function ReservationPage() {
    return (
        <>
            <Head>
                <title>Minim'Ow Bar - Réservation</title>
                <meta name='description' content="Minim'Ow Bar - Réservation" />
            </Head>
        
            <div className='flex flex-col gap-4 max-w-4xl mx-auto'>
                <div className='flex flex-col bg-primary-200 w-full p-4'>
                    <h3 className='text-xl text-primary-800 font-semibold uppercase'>Horaires</h3>
                    <p className='text-primary-600 border-l-4 border-primary-600 pl-2'>Au Minim'Ow Bar la réservation est possible pour le déjeuner entre 12h00 et 18h30. En dehors de ces heures il n'est pas possible de réserver et l'entrée se fait en fonction des places disponibles. Vous pouvez effectuer votre réservation en ligne à l'aide du formulaire ci-dessous.</p>

                    <div className='mt-2'>
                        <ReservationContent />
                    </div>
                </div>
            </div>
        </>
    );
}
 